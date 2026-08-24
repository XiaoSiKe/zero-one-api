package dto

import (
	"reflect"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/service"
)

func TestPublicSettingsUsesTheServiceOwnedProjection(t *testing.T) {
	if reflect.TypeOf(PublicSettings{}) != reflect.TypeOf(service.PublicSettingsProjection{}) {
		t.Fatal("dto.PublicSettings must remain an alias of service.PublicSettingsProjection")
	}
}
