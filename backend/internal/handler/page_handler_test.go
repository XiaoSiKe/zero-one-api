package handler

import (
	"context"
	"net/http"
	"os"
	"path/filepath"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/config"
	middleware2 "github.com/Wei-Shaw/sub2api/internal/server/middleware"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
)

type pageSettingRepoStub struct {
	customMenuItems string
}

func (s *pageSettingRepoStub) Get(context.Context, string) (*service.Setting, error) {
	panic("unexpected Get call")
}
func (s *pageSettingRepoStub) GetValue(_ context.Context, key string) (string, error) {
	if key == service.SettingKeyCustomMenuItems {
		return s.customMenuItems, nil
	}
	return "", nil
}
func (s *pageSettingRepoStub) Set(context.Context, string, string) error {
	panic("unexpected Set call")
}
func (s *pageSettingRepoStub) GetMultiple(context.Context, []string) (map[string]string, error) {
	panic("unexpected GetMultiple call")
}
func (s *pageSettingRepoStub) SetMultiple(context.Context, map[string]string) error {
	panic("unexpected SetMultiple call")
}
func (s *pageSettingRepoStub) GetAll(context.Context) (map[string]string, error) {
	panic("unexpected GetAll call")
}
func (s *pageSettingRepoStub) Delete(context.Context, string) error {
	panic("unexpected Delete call")
}

func TestPageHandlerCustomMenuVisibility(t *testing.T) {
	gin.SetMode(gin.TestMode)
	repo := &pageSettingRepoStub{customMenuItems: `[
		{"url":"md:user-page","visibility":"user"},
		{"url":"md:admin-page","visibility":"admin"},
		{"url":"md:shared-page","visibility":"all"}
	]`}
	h := NewPageHandler(t.TempDir(), service.NewSettingService(repo, &config.Config{}))

	for _, tt := range []struct {
		name       string
		role       string
		slug       string
		wantAccess bool
	}{
		{name: "regular user page for regular user", role: service.RoleUser, slug: "user-page", wantAccess: true},
		{name: "regular user page for admin remains allowed", role: service.RoleAdmin, slug: "user-page", wantAccess: true},
		{name: "admin page for regular user remains blocked", role: service.RoleUser, slug: "admin-page", wantAccess: false},
		{name: "admin page for admin", role: service.RoleAdmin, slug: "admin-page", wantAccess: true},
		{name: "shared page for regular user", role: service.RoleUser, slug: "shared-page", wantAccess: true},
		{name: "shared page for admin", role: service.RoleAdmin, slug: "shared-page", wantAccess: true},
	} {
		t.Run(tt.name, func(t *testing.T) {
			c, _ := gin.CreateTestContext(nil)
			c.Request = &http.Request{}
			c.Set(string(middleware2.ContextKeyUserRole), tt.role)
			if got := h.checkSlugVisibility(c, tt.slug); got != tt.wantAccess {
				t.Fatalf("checkSlugVisibility() = %v, want %v", got, tt.wantAccess)
			}
		})
	}

	imageContext, _ := gin.CreateTestContext(nil)
	imageContext.Request = &http.Request{}
	if !h.checkImageSlugVisibility(imageContext, "user-page") {
		t.Fatal("user page image should remain public")
	}
	if h.checkImageSlugVisibility(imageContext, "admin-page") {
		t.Fatal("admin page image should remain blocked")
	}
	if !h.checkImageSlugVisibility(imageContext, "shared-page") {
		t.Fatal("shared page image should be public")
	}
}

func TestCleanPageImageRelativePath(t *testing.T) {
	tests := []struct {
		name string
		in   string
		want string
		ok   bool
	}{
		{name: "single filename", in: "logo.png", want: "logo.png", ok: true},
		{name: "nested path", in: "images/logo.png", want: filepath.Join("images", "logo.png"), ok: true},
		{name: "dot prefix", in: "./logo.png", want: "logo.png", ok: true},
		{name: "url escaped slash", in: "images%2Flogo.png", want: filepath.Join("images", "logo.png"), ok: true},
		{name: "parent traversal", in: "../secret.png", ok: false},
		{name: "encoded parent traversal", in: "%2e%2e/secret.png", ok: false},
		{name: "backslash traversal", in: `images\secret.png`, ok: false},
		{name: "absolute path", in: "/etc/passwd", ok: false},
		{name: "encoded absolute path", in: "%2fetc/passwd", ok: false},
		{name: "encoded nul byte", in: "logo.png%00", ok: false},
		{name: "invalid escape", in: "logo.png%zz", ok: false},
		{name: "empty path", in: "", ok: false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, ok := cleanPageImageRelativePath(tt.in)
			if ok != tt.ok {
				t.Fatalf("ok = %v, want %v", ok, tt.ok)
			}
			if got != tt.want {
				t.Fatalf("path = %q, want %q", got, tt.want)
			}
		})
	}
}

func TestResolvePageImagePath(t *testing.T) {
	root := t.TempDir()
	pagesDir := filepath.Join(root, "pages")
	base := filepath.Join(pagesDir, "guide")
	if err := os.MkdirAll(filepath.Join(base, "images"), 0755); err != nil {
		t.Fatalf("create images dir: %v", err)
	}
	if err := os.WriteFile(filepath.Join(base, "logo.png"), []byte("fake"), 0644); err != nil {
		t.Fatalf("create direct image: %v", err)
	}
	if err := os.WriteFile(filepath.Join(base, "images", "logo.png"), []byte("fake"), 0644); err != nil {
		t.Fatalf("create image: %v", err)
	}

	got, ok := resolvePageImagePath(pagesDir, base, "logo.png")
	if !ok {
		t.Fatal("expected direct image path to be accepted")
	}
	want := mustEvalSymlinks(t, filepath.Join(base, "logo.png"))
	if got != want {
		t.Fatalf("path = %q, want %q", got, want)
	}

	got, ok = resolvePageImagePath(pagesDir, base, "images/logo.png")
	if !ok {
		t.Fatal("expected nested image path to be accepted")
	}
	want = mustEvalSymlinks(t, filepath.Join(base, "images", "logo.png"))
	if got != want {
		t.Fatalf("path = %q, want %q", got, want)
	}

	if got, ok := resolvePageImagePath(pagesDir, base, "../guide.md"); ok {
		t.Fatalf("expected traversal to be rejected, got %q", got)
	}
}

func TestResolvePageImagePathRejectsSymlinkEscape(t *testing.T) {
	root := t.TempDir()
	pagesDir := filepath.Join(root, "pages")
	base := filepath.Join(pagesDir, "guide")
	outside := filepath.Join(root, "outside")

	if err := os.MkdirAll(base, 0755); err != nil {
		t.Fatalf("create page dir: %v", err)
	}
	if err := os.MkdirAll(outside, 0755); err != nil {
		t.Fatalf("create outside dir: %v", err)
	}
	if err := os.WriteFile(filepath.Join(outside, "secret.png"), []byte("secret"), 0644); err != nil {
		t.Fatalf("create outside file: %v", err)
	}
	if err := os.Symlink(outside, filepath.Join(base, "images")); err != nil {
		t.Skipf("symlink not supported: %v", err)
	}

	if got, ok := resolvePageImagePath(pagesDir, base, "images/secret.png"); ok {
		t.Fatalf("expected symlink escape to be rejected, got %q", got)
	}
}

func mustEvalSymlinks(t *testing.T, path string) string {
	t.Helper()

	realPath, err := filepath.EvalSymlinks(path)
	if err != nil {
		t.Fatalf("eval symlinks for %q: %v", path, err)
	}
	return realPath
}
