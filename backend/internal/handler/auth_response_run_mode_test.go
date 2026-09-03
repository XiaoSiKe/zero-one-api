//go:build unit

package handler

import (
	"encoding/json"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/stretchr/testify/require"
)

func TestAuthResponseUserIncludesConfiguredRunMode(t *testing.T) {
	user := &service.User{
		ID:       31,
		Email:    "me@example.com",
		Username: "user-31",
		Role:     service.RoleUser,
		Status:   service.StatusActive,
	}

	encoded, err := json.Marshal(newAuthResponseUser(user, config.RunModeStandard))
	require.NoError(t, err)

	var payload map[string]any
	require.NoError(t, json.Unmarshal(encoded, &payload))
	require.Equal(t, float64(31), payload["id"])
	require.Equal(t, config.RunModeStandard, payload["run_mode"])
}
