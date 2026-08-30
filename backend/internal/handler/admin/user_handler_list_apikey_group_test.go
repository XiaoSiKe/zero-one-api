package admin

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

// listUsersFilterStub 捕获传入 ListUsers 的 filters，其余 AdminService 方法走 baseline stub。
type listUsersFilterStub struct {
	service.AdminService
	captured       service.UserListFilters
	capturedSortBy string
	capturedOrder  string
	users          []service.User
}

func (s *listUsersFilterStub) ListUsers(_ context.Context, _, _ int, filters service.UserListFilters, sortBy, sortOrder string) ([]service.User, int64, error) {
	s.captured = filters
	s.capturedSortBy = sortBy
	s.capturedOrder = sortOrder
	return s.users, int64(len(s.users)), nil
}

func TestAdminUserList_ParsesAPIKeyGroupID(t *testing.T) {
	gin.SetMode(gin.TestMode)
	cases := []struct {
		name  string
		query string
		want  int64
	}{
		{"valid id", "?api_key_group_id=42", 42},
		{"missing", "", 0},
		{"zero ignored", "?api_key_group_id=0", 0},
		{"negative ignored", "?api_key_group_id=-3", 0},
		{"non-numeric ignored", "?api_key_group_id=abc", 0},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			stub := &listUsersFilterStub{AdminService: newStubAdminService()}
			r := gin.New()
			h := NewUserHandler(stub, nil, nil, nil, nil, nil, nil)
			r.GET("/admin/users", h.List)

			w := httptest.NewRecorder()
			req, _ := http.NewRequest(http.MethodGet, "/admin/users"+tc.query, nil)
			r.ServeHTTP(w, req)

			require.Equal(t, http.StatusOK, w.Code)
			require.Equal(t, tc.want, stub.captured.APIKeyGroupID)
		})
	}
}

func TestAdminUserList_ParsesAffiliateViewAndOwnsSort(t *testing.T) {
	gin.SetMode(gin.TestMode)
	for _, view := range []string{
		service.AffiliateUserViewRelationships,
		service.AffiliateUserViewExclusiveAgents,
	} {
		t.Run(view, func(t *testing.T) {
			stub := &listUsersFilterStub{AdminService: newStubAdminService()}
			r := gin.New()
			h := NewUserHandler(stub, nil, nil, nil, nil, nil, nil)
			r.GET("/admin/users", h.List)

			w := httptest.NewRecorder()
			req, _ := http.NewRequest(http.MethodGet,
				"/admin/users?affiliate_view="+view+"&sort_by=email&sort_order=asc", nil)
			r.ServeHTTP(w, req)

			require.Equal(t, http.StatusOK, w.Code)
			require.Equal(t, view, stub.captured.AffiliateView)
			require.Equal(t, "agent_value", stub.capturedSortBy)
			require.Equal(t, "desc", stub.capturedOrder)
		})
	}
}

func TestAdminUserList_RejectsInvalidAffiliateView(t *testing.T) {
	gin.SetMode(gin.TestMode)
	stub := &listUsersFilterStub{AdminService: newStubAdminService()}
	r := gin.New()
	h := NewUserHandler(stub, nil, nil, nil, nil, nil, nil)
	r.GET("/admin/users", h.List)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest(http.MethodGet, "/admin/users?affiliate_view=all", nil)
	r.ServeHTTP(w, req)

	require.Equal(t, http.StatusBadRequest, w.Code)
	require.Empty(t, stub.captured.AffiliateView)
}

func TestAdminUserList_AffiliateProjectionIsOptIn(t *testing.T) {
	gin.SetMode(gin.TestMode)
	value := 42.5
	exclusive := true
	stub := &listUsersFilterStub{
		AdminService: newStubAdminService(),
		users: []service.User{{
			ID: 7, Email: "agent@example.com", Username: "agent",
			Role: service.RoleUser, Status: service.StatusActive,
			AgentValue: &value, ExclusiveAgent: &exclusive,
		}},
	}
	r := gin.New()
	h := NewUserHandler(stub, nil, nil, nil, nil, nil, nil)
	r.GET("/admin/users", h.List)

	affiliate := httptest.NewRecorder()
	r.ServeHTTP(affiliate, httptest.NewRequest(http.MethodGet,
		"/admin/users?affiliate_view=relationships", nil))
	require.Equal(t, http.StatusOK, affiliate.Code)
	require.Contains(t, affiliate.Body.String(), `"agent_value":42.5`)
	require.Contains(t, affiliate.Body.String(), `"exclusive_agent":true`)

	stub.users[0].AgentValue = nil
	stub.users[0].ExclusiveAgent = nil
	ordinary := httptest.NewRecorder()
	r.ServeHTTP(ordinary, httptest.NewRequest(http.MethodGet, "/admin/users", nil))
	require.Equal(t, http.StatusOK, ordinary.Code)
	require.NotContains(t, ordinary.Body.String(), "agent_value")
	require.NotContains(t, ordinary.Body.String(), "exclusive_agent")
}
