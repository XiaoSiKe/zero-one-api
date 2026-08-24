package admin

import (
	"bytes"
	"context"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	servermiddleware "github.com/Wei-Shaw/sub2api/internal/server/middleware"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

type affiliateHandlerRepoStub struct {
	service.AffiliateRepository
	invitee          service.AffiliateSummary
	bindResult       bool
	bindErr          error
	boundActorID     *int64
	listedFilter     service.AffiliateRecordFilter
	listInviteResult []service.AffiliateInviteRecord
	settingsUpdates  []service.AffiliateUserSettingsUpdate
}

func (r *affiliateHandlerRepoStub) UpdateUserSettings(_ context.Context, _ int64, update service.AffiliateUserSettingsUpdate) error {
	r.settingsUpdates = append(r.settingsUpdates, update)
	return nil
}

func (r *affiliateHandlerRepoStub) BindInviter(_ context.Context, inviteeID, inviterID int64, actorID *int64) (bool, error) {
	if actorID != nil {
		copy := *actorID
		r.boundActorID = &copy
	}
	if r.bindErr != nil || !r.bindResult {
		return r.bindResult, r.bindErr
	}
	boundAt := time.Now().UTC()
	r.invitee.UserID = inviteeID
	r.invitee.InviterID = &inviterID
	r.invitee.InviterBoundAt = &boundAt
	return true, nil
}

func (r *affiliateHandlerRepoStub) EnsureUserAffiliate(_ context.Context, userID int64) (*service.AffiliateSummary, error) {
	copy := r.invitee
	copy.UserID = userID
	return &copy, nil
}

func (r *affiliateHandlerRepoStub) ListAffiliateInviteRecords(_ context.Context, filter service.AffiliateRecordFilter) ([]service.AffiliateInviteRecord, int64, error) {
	r.listedFilter = filter
	return r.listInviteResult, int64(len(r.listInviteResult)), nil
}

func newAffiliateHandlerRouter(repo *affiliateHandlerRepoStub, actorID int64, captureAction *string) *gin.Engine {
	gin.SetMode(gin.TestMode)
	router := gin.New()
	router.Use(func(c *gin.Context) {
		if actorID > 0 {
			c.Set(string(servermiddleware.ContextKeyUser), servermiddleware.AuthSubject{UserID: actorID})
			c.Set(string(servermiddleware.ContextKeyUserRole), service.RoleAdmin)
			c.Set("auth_method", service.AuditAuthMethodJWT)
		}
		c.Next()
		if captureAction != nil {
			if action, ok := c.Get("audit_action"); ok {
				*captureAction, _ = action.(string)
			}
		}
	})
	handler := NewAffiliateHandler(service.NewAffiliateService(repo, nil, nil, nil), nil)
	router.POST("/api/v1/admin/affiliates/invites", handler.BindInviter)
	router.GET("/api/v1/admin/affiliates/invites", handler.ListInviteRecords)
	router.PUT("/api/v1/admin/affiliates/users/:user_id", handler.UpdateUserSettings)
	router.DELETE("/api/v1/admin/affiliates/users/:user_id", handler.ClearUserSettings)
	return router
}

func TestAffiliateHandlerBindInviterUsesAuthenticatedActorAndAuditAction(t *testing.T) {
	repo := &affiliateHandlerRepoStub{bindResult: true}
	auditAction := ""
	router := newAffiliateHandlerRouter(repo, 99, &auditAction)

	req := httptest.NewRequest(http.MethodPost, "/api/v1/admin/affiliates/invites",
		bytes.NewBufferString(`{"inviter_id":10,"invitee_id":20}`))
	req.Header.Set("Content-Type", "application/json")
	res := httptest.NewRecorder()
	router.ServeHTTP(res, req)

	require.Equal(t, http.StatusOK, res.Code)
	require.Contains(t, res.Body.String(), `"inviter_id":10`)
	require.Contains(t, res.Body.String(), `"invitee_id":20`)
	require.Contains(t, res.Body.String(), `"inviter_bound_at"`)
	require.NotNil(t, repo.boundActorID)
	require.Equal(t, int64(99), *repo.boundActorID)
	require.Equal(t, "admin.affiliates.invite.bind", auditAction)
}

func TestAffiliateHandlerBindInviterRejectsUnsafeRequests(t *testing.T) {
	tests := []struct {
		name       string
		body       string
		actorID    int64
		repo       *affiliateHandlerRepoStub
		wantStatus int
		wantText   string
	}{
		{name: "missing actor", body: `{"inviter_id":10,"invitee_id":20}`, repo: &affiliateHandlerRepoStub{bindResult: true}, wantStatus: http.StatusUnauthorized},
		{name: "invalid ids", body: `{"inviter_id":0,"invitee_id":20}`, actorID: 99, repo: &affiliateHandlerRepoStub{}, wantStatus: http.StatusBadRequest},
		{name: "self binding", body: `{"inviter_id":20,"invitee_id":20}`, actorID: 99, repo: &affiliateHandlerRepoStub{}, wantStatus: http.StatusBadRequest, wantText: "AFFILIATE_SELF_BINDING"},
		{name: "existing relationship", body: `{"inviter_id":10,"invitee_id":20}`, actorID: 99, repo: &affiliateHandlerRepoStub{}, wantStatus: http.StatusConflict, wantText: "AFFILIATE_ALREADY_BOUND"},
		{name: "cycle", body: `{"inviter_id":10,"invitee_id":20}`, actorID: 99, repo: &affiliateHandlerRepoStub{bindErr: service.ErrAffiliateCycle}, wantStatus: http.StatusBadRequest, wantText: "AFFILIATE_CYCLE"},
		{name: "unknown user", body: `{"inviter_id":10,"invitee_id":20}`, actorID: 99, repo: &affiliateHandlerRepoStub{bindErr: service.ErrUserNotFound}, wantStatus: http.StatusNotFound, wantText: "USER_NOT_FOUND"},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			router := newAffiliateHandlerRouter(test.repo, test.actorID, nil)
			req := httptest.NewRequest(http.MethodPost, "/api/v1/admin/affiliates/invites", strings.NewReader(test.body))
			req.Header.Set("Content-Type", "application/json")
			res := httptest.NewRecorder()
			router.ServeHTTP(res, req)

			require.Equal(t, test.wantStatus, res.Code)
			if test.wantText != "" {
				require.Contains(t, res.Body.String(), test.wantText)
			}
		})
	}
}

func TestAffiliateHandlerListInvitesParsesExactInviterID(t *testing.T) {
	repo := &affiliateHandlerRepoStub{listInviteResult: []service.AffiliateInviteRecord{{InviterID: 42, InviteeID: 7}}}
	router := newAffiliateHandlerRouter(repo, 99, nil)

	res := httptest.NewRecorder()
	router.ServeHTTP(res, httptest.NewRequest(http.MethodGet,
		"/api/v1/admin/affiliates/invites?inviter_id=42&page=1&page_size=20", nil))

	require.Equal(t, http.StatusOK, res.Code)
	require.Equal(t, int64(42), repo.listedFilter.InviterID)

	bad := httptest.NewRecorder()
	router.ServeHTTP(bad, httptest.NewRequest(http.MethodGet,
		"/api/v1/admin/affiliates/invites?inviter_id=not-a-number", nil))
	require.Equal(t, http.StatusBadRequest, bad.Code)
}

func TestAffiliateHandlerLookupUsersPrefersExactNumericID(t *testing.T) {
	adminService := newStubAdminService()
	adminService.users = []service.User{{
		ID:       42,
		Email:    "exact@example.com",
		Username: "exact-user",
	}}
	handler := NewAffiliateHandler(nil, adminService)
	router := gin.New()
	router.GET("/api/v1/admin/affiliates/users/lookup", handler.LookupUsers)

	res := httptest.NewRecorder()
	router.ServeHTTP(res, httptest.NewRequest(http.MethodGet,
		"/api/v1/admin/affiliates/users/lookup?q=%2042%20", nil))

	require.Equal(t, http.StatusOK, res.Code)
	require.Contains(t, res.Body.String(), `"id":42`)
	require.Contains(t, res.Body.String(), `"email":"exact@example.com"`)
	require.Equal(t, 0, adminService.lastListUsers.calls)
}

func TestAffiliateHandlerUsesOneSettingsMutationPerRequest(t *testing.T) {
	repo := &affiliateHandlerRepoStub{}
	router := newAffiliateHandlerRouter(repo, 99, nil)

	update := httptest.NewRecorder()
	request := httptest.NewRequest(http.MethodPut, "/api/v1/admin/affiliates/users/42",
		strings.NewReader(`{"aff_code":" vip-2026 ","aff_rebate_rate_percent":35}`))
	request.Header.Set("Content-Type", "application/json")
	router.ServeHTTP(update, request)
	require.Equal(t, http.StatusOK, update.Code)
	require.Len(t, repo.settingsUpdates, 1)
	require.Equal(t, "VIP-2026", *repo.settingsUpdates[0].AffCode)
	require.True(t, repo.settingsUpdates[0].UpdateRebateRate)

	clear := httptest.NewRecorder()
	router.ServeHTTP(clear, httptest.NewRequest(http.MethodDelete,
		"/api/v1/admin/affiliates/users/42", nil))
	require.Equal(t, http.StatusOK, clear.Code)
	require.Len(t, repo.settingsUpdates, 2)
	require.True(t, repo.settingsUpdates[1].ResetAffCode)
	require.True(t, repo.settingsUpdates[1].UpdateRebateRate)
}
