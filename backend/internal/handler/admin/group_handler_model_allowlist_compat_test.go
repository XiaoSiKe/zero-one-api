package admin

import (
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/stretchr/testify/require"
)

func TestResolveCreateGroupModelAllowlistAcceptsLegacyField(t *testing.T) {
	legacy := &service.GroupModelAllowlist{Enabled: true, Models: []string{"gpt-*"}}
	got, err := resolveCreateGroupModelAllowlist(nil, legacy)
	require.NoError(t, err)
	require.Equal(t, *legacy, got)
}

func TestResolveUpdateGroupModelAllowlistRejectsConflictingFields(t *testing.T) {
	current := &service.GroupModelAllowlist{Enabled: true, Models: []string{"gpt-*"}}
	legacy := &service.GroupModelAllowlist{Enabled: false, Models: []string{"gpt-*"}}
	got, err := resolveUpdateGroupModelAllowlist(current, legacy)
	require.Nil(t, got)
	require.EqualError(t, err, "model_allowlist conflicts with models_list_config")
}

func TestResolveUpdateGroupModelAllowlistAcceptsMatchingFields(t *testing.T) {
	current := &service.GroupModelAllowlist{Enabled: true, Models: []string{"gpt-*"}}
	legacy := &service.GroupModelAllowlist{Enabled: true, Models: []string{"gpt-*"}}
	got, err := resolveUpdateGroupModelAllowlist(current, legacy)
	require.NoError(t, err)
	require.Same(t, current, got)
}
