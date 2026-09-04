//go:build e2e

package integration

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

// These mutating probes require an isolated server with registration enabled.
// Each test owns its user and fails on API errors instead of silently skipping.
func TestUserRegistrationAndLogin(t *testing.T) {
	email, token := registerAndLoginE2EUser(t)
	var profile struct {
		Email string `json:"email"`
	}
	e2eAPI(t, http.MethodGet, "/api/v1/user/profile", token, nil, &profile)
	require.Equal(t, email, profile.Email)
}

func TestAPIKeyLifecycle(t *testing.T) {
	_, token := registerAndLoginE2EUser(t)
	var key struct {
		ID   int64  `json:"id"`
		Key  string `json:"key"`
		Name string `json:"name"`
	}
	e2eAPI(t, http.MethodPost, "/api/v1/keys", token, map[string]string{"name": "e2e-lifecycle"}, &key)
	require.Positive(t, key.ID)
	require.NotEmpty(t, key.Key)
	path := fmt.Sprintf("/api/v1/keys/%d", key.ID)
	t.Cleanup(func() { e2eAPI(t, http.MethodDelete, path, token, nil, nil) })

	var saved struct {
		Name string `json:"name"`
	}
	e2eAPI(t, http.MethodGet, path, token, nil, &saved)
	require.Equal(t, key.Name, saved.Name)

	resp := e2eRequest(t, http.MethodGet, "/v1/models", key.Key, nil)
	defer resp.Body.Close()
	// A fresh user may have no balance. Check the middleware's explicit denial;
	// authentication errors, server failures and HTML responses are not valid.
	require.Contains(t, []int{http.StatusOK, http.StatusForbidden}, resp.StatusCode)
	var models map[string]any
	require.NoError(t, json.NewDecoder(resp.Body).Decode(&models))
	if resp.StatusCode == http.StatusOK {
		require.Equal(t, "list", models["object"])
	} else {
		require.Equal(t, "INSUFFICIENT_BALANCE", models["code"])
	}

	var stats map[string]any
	e2eAPI(t, http.MethodGet, "/api/v1/usage/dashboard/stats", token, nil, &stats)
	require.NotEmpty(t, stats)
}

func registerAndLoginE2EUser(t *testing.T) (string, string) {
	t.Helper()
	email := fmt.Sprintf("e2e-%d@test.local", time.Now().UnixNano())
	payload := map[string]string{"email": email, "password": "E2eTest@12345", "username": "e2e-test-user"}
	e2eAPI(t, http.MethodPost, "/api/v1/auth/register", "", payload, nil)
	var auth struct {
		AccessToken string `json:"access_token"`
	}
	e2eAPI(t, http.MethodPost, "/api/v1/auth/login", "", payload, &auth)
	require.NotEmpty(t, auth.AccessToken)
	return email, auth.AccessToken
}

func e2eRequest(t *testing.T, method, path, token string, payload any) *http.Response {
	t.Helper()
	var body io.Reader
	if payload != nil {
		raw, err := json.Marshal(payload)
		require.NoError(t, err)
		body = bytes.NewReader(raw)
	}
	req, err := http.NewRequest(method, baseURL+path, body)
	require.NoError(t, err)
	if payload != nil {
		req.Header.Set("Content-Type", "application/json")
	}
	if token != "" {
		req.Header.Set("Authorization", "Bearer "+token)
	}
	if method == http.MethodPost || method == http.MethodDelete {
		req.Header.Set("Idempotency-Key", fmt.Sprintf("e2e-%d", time.Now().UnixNano()))
	}
	resp, err := (&http.Client{Timeout: 30 * time.Second}).Do(req)
	require.NoError(t, err, "%s %s", method, path)
	return resp
}

func e2eAPI(t *testing.T, method, path, token string, payload, target any) {
	t.Helper()
	resp := e2eRequest(t, method, path, token, payload)
	defer resp.Body.Close()
	require.Equal(t, http.StatusOK, resp.StatusCode, "%s %s", method, path)
	var envelope struct {
		Code int             `json:"code"`
		Data json.RawMessage `json:"data"`
	}
	require.NoError(t, json.NewDecoder(resp.Body).Decode(&envelope))
	require.Zero(t, envelope.Code, "%s %s", method, path)
	if target != nil {
		require.NoError(t, json.Unmarshal(envelope.Data, target))
	}
}
