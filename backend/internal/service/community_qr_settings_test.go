//go:build unit

package service

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/binary"
	"encoding/json"
	"hash/crc32"
	"strings"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/config"
	infraerrors "github.com/Wei-Shaw/sub2api/internal/pkg/errors"
	"github.com/stretchr/testify/require"
)

func communityQRDataURI(mimeType string, content []byte) string {
	return "data:" + mimeType + ";base64," + base64.StdEncoding.EncodeToString(content)
}

func validCommunityQRPNG() string {
	return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
}

func communityQRTestImageBytes(t *testing.T, rawImage string) []byte {
	t.Helper()
	_, encoded, ok := strings.Cut(rawImage, ",")
	require.True(t, ok)
	content, err := base64.StdEncoding.DecodeString(encoded)
	require.NoError(t, err)
	return content
}

func communityQROversizedPNG(width, height uint32) []byte {
	var out bytes.Buffer
	out.WriteString("\x89PNG\r\n\x1a\n")
	ihdr := make([]byte, 13)
	binary.BigEndian.PutUint32(ihdr[0:4], width)
	binary.BigEndian.PutUint32(ihdr[4:8], height)
	ihdr[8] = 8 // bit depth
	ihdr[9] = 2 // truecolour
	writeChunk := func(kind string, data []byte) {
		_ = binary.Write(&out, binary.BigEndian, uint32(len(data)))
		out.WriteString(kind)
		out.Write(data)
		crc := crc32.NewIEEE()
		_, _ = crc.Write([]byte(kind))
		_, _ = crc.Write(data)
		_ = binary.Write(&out, binary.BigEndian, crc.Sum32())
	}
	writeChunk("IHDR", ihdr)
	writeChunk("IEND", nil)
	return out.Bytes()
}

func TestNormalizeCommunityQRSettings(t *testing.T) {
	validPNG := validCommunityQRPNG()
	validJPEG := "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAACAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDi6KKK+ZP3E//Z"
	validWebP := "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoCAAIAAUAmJaACdLoB+AADsAD+8ut//NgVzXPv9//S4P0uD9Lg/9KQAAA="

	for name, rawImage := range map[string]string{
		"png":  validPNG,
		"jpeg": validJPEG,
		"webp": validWebP,
	} {
		t.Run("accepts "+name, func(t *testing.T) {
			enabled, normalized, err := NormalizeCommunityQRSettings(true, rawImage)
			require.NoError(t, err)
			require.True(t, enabled)
			require.Equal(t, rawImage, normalized)
		})
	}

	t.Run("disabled may retain a valid image or clear it", func(t *testing.T) {
		enabled, retained, err := NormalizeCommunityQRSettings(false, validPNG)
		require.NoError(t, err)
		require.False(t, enabled)
		require.Equal(t, validPNG, retained)

		enabled, cleared, err := NormalizeCommunityQRSettings(false, "")
		require.NoError(t, err)
		require.False(t, enabled)
		require.Empty(t, cleared)
	})

	t.Run("enabled requires an image", func(t *testing.T) {
		_, _, err := NormalizeCommunityQRSettings(true, "")
		require.Error(t, err)
	})

	validPNGBytes := communityQRTestImageBytes(t, validPNG)
	tooLarge := append(append([]byte(nil), validPNGBytes...), make([]byte, MaxCommunityQRImageBytes-len(validPNGBytes)+1)...)
	truncatedPNG := validPNGBytes[:len(validPNGBytes)/2]
	corruptPNG := append([]byte(nil), validPNGBytes...)
	corruptPNG[len(corruptPNG)-15] ^= 0xff
	for name, rawImage := range map[string]string{
		"svg":                    communityQRDataURI("image/svg+xml", []byte(`<svg><script>alert(1)</script></svg>`)),
		"html MIME":              communityQRDataURI("text/html", []byte(`<html>bad</html>`)),
		"html disguised png":     communityQRDataURI("image/png", []byte(`<html>bad</html>`)),
		"wrong decoder":          communityQRDataURI("image/webp", validPNGBytes),
		"unsupported jpg MIME":   strings.Replace(validJPEG, "image/jpeg", "image/jpg", 1),
		"not base64":             "data:image/png,plain-text",
		"malformed base64":       "data:image/png;base64,%%%",
		"embedded whitespace":    strings.Replace(validPNG, "base64,", "base64,\n", 1),
		"surrounding whitespace": " " + validPNG,
		"truncated png":          communityQRDataURI("image/png", truncatedPNG),
		"corrupt png":            communityQRDataURI("image/png", corruptPNG),
		"dimension too wide":     communityQRDataURI("image/png", communityQROversizedPNG(MaxCommunityQRImageDimension+1, 1)),
		"too many pixels":        communityQRDataURI("image/png", communityQROversizedPNG(4000, 4001)),
		"too large":              communityQRDataURI("image/png", tooLarge),
	} {
		t.Run("rejects "+name, func(t *testing.T) {
			_, _, err := NormalizeCommunityQRSettings(false, rawImage)
			require.Error(t, err)
		})
	}
}

func TestSettingService_CommunityQRUpdateAndAdminReadRoundTrip(t *testing.T) {
	rawImage := validCommunityQRPNG()
	repo := &settingUpdateRepoStub{}
	svc := NewSettingService(repo, &config.Config{})

	err := svc.UpdateSettings(context.Background(), &SystemSettings{
		CommunityQREnabled:     true,
		CommunityQRImage:       rawImage,
		CommunityQRTitle:       "售后二群",
		CommunityQRDescription: "扫码加入售后群获取支持",
	})
	require.NoError(t, err)
	require.Equal(t, "true", repo.updates[SettingKeyCommunityQREnabled])
	require.Equal(t, rawImage, repo.updates[SettingKeyCommunityQRImage])
	require.Equal(t, "售后二群", repo.updates[SettingKeyCommunityQRTitle])
	require.Equal(t, "扫码加入售后群获取支持", repo.updates[SettingKeyCommunityQRDescription])

	adminSettings, err := NewSettingService(&settingGetAllRepoStub{values: repo.updates}, &config.Config{}).GetAllSettings(context.Background())
	require.NoError(t, err)
	require.True(t, adminSettings.CommunityQREnabled)
	require.Equal(t, rawImage, adminSettings.CommunityQRImage)
	require.Equal(t, "售后二群", adminSettings.CommunityQRTitle)
	require.Equal(t, "扫码加入售后群获取支持", adminSettings.CommunityQRDescription)
}

func TestSettingService_CommunityQRAdminReadFailsClosedForInvalidPersistedImage(t *testing.T) {
	invalid := communityQRDataURI("image/svg+xml", []byte(`<svg><script>alert(1)</script></svg>`))
	settings, err := NewSettingService(&settingGetAllRepoStub{values: map[string]string{
		SettingKeyCommunityQREnabled: "true",
		SettingKeyCommunityQRImage:   invalid,
	}}, &config.Config{}).GetAllSettings(context.Background())

	require.NoError(t, err)
	require.False(t, settings.CommunityQREnabled)
	require.Empty(t, settings.CommunityQRImage)

	valid := validCommunityQRPNG()
	disabled, err := NewSettingService(&settingGetAllRepoStub{values: map[string]string{
		SettingKeyCommunityQREnabled: "false",
		SettingKeyCommunityQRImage:   valid,
	}}, &config.Config{}).GetAllSettings(context.Background())
	require.NoError(t, err)
	require.False(t, disabled.CommunityQREnabled)
	require.Equal(t, valid, disabled.CommunityQRImage)
}

func TestSettingService_CommunityQRUpdateRejectsInvalidWithoutWriting(t *testing.T) {
	repo := &settingUpdateRepoStub{}
	err := NewSettingService(repo, &config.Config{}).UpdateSettings(context.Background(), &SystemSettings{
		CommunityQREnabled: true,
		CommunityQRImage:   "data:image/svg+xml;base64,PHN2Zz48L3N2Zz4=",
	})

	require.Error(t, err)
	require.Equal(t, "INVALID_COMMUNITY_QR", infraerrors.Reason(err))
	require.Nil(t, repo.updates)
}

func TestSettingService_CommunityQRPublicProjectionExposesSwitchAndNeverLoadsOrLeaksImage(t *testing.T) {
	rawImage := validCommunityQRPNG()
	for name, values := range map[string]map[string]string{
		"enabled and valid": {
			SettingKeyCommunityQREnabled:     "true",
			SettingKeyCommunityQRImage:       rawImage,
			SettingKeyCommunityQRTitle:       "售后二群",
			SettingKeyCommunityQRDescription: "扫码加入售后群获取支持",
		},
		"enabled but missing": {
			SettingKeyCommunityQREnabled: "true",
		},
		"enabled but invalid": {
			SettingKeyCommunityQREnabled: "true",
			SettingKeyCommunityQRImage:   "data:image/png;base64,PGh0bWw+YmFkPC9odG1sPg==",
		},
		"disabled with valid image": {
			SettingKeyCommunityQREnabled: "false",
			SettingKeyCommunityQRImage:   rawImage,
		},
	} {
		t.Run(name, func(t *testing.T) {
			repo := &settingPublicRepoStub{values: values}
			svc := NewSettingService(repo, &config.Config{})
			publicSettings, err := svc.GetPublicSettings(context.Background())
			require.NoError(t, err)
			require.Equal(t, values[SettingKeyCommunityQREnabled] == "true", publicSettings.CommunityQREnabled)
			require.NotContains(t, repo.requestedKeys, SettingKeyCommunityQRImage)
			require.NotEmpty(t, publicSettings.CommunityQRTitle)
			require.NotEmpty(t, publicSettings.CommunityQRDescription)

			injected, err := svc.GetPublicSettingsForInjection(context.Background())
			require.NoError(t, err)
			payload, err := json.Marshal(injected)
			require.NoError(t, err)
			require.NotContains(t, string(payload), "community_qr_image")
			require.NotContains(t, string(payload), rawImage)
			require.Contains(t, string(payload), `"community_qr_title"`)
			require.Contains(t, string(payload), `"community_qr_description"`)
		})
	}
}

func TestSettingService_InitializeDefaultSettingsIncludesCommunityQR(t *testing.T) {
	repo := &forwardedIPMigrationRepoStub{values: map[string]string{}}
	require.NoError(t, NewSettingService(repo, &config.Config{}).InitializeDefaultSettings(context.Background()))
	require.Equal(t, "false", repo.values[SettingKeyCommunityQREnabled])
	require.Empty(t, repo.values[SettingKeyCommunityQRImage])
	require.Equal(t, DefaultCommunityQRTitle, repo.values[SettingKeyCommunityQRTitle])
	require.Equal(t, DefaultCommunityQRDescription, repo.values[SettingKeyCommunityQRDescription])
}
