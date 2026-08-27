package service

import (
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"strings"
)

const MaxPublicSiteLogoBytes = 300 * 1024

type PublicSiteLogo struct {
	MIMEType string
	Content  []byte
	Revision string
}

// ConsoleSiteLogoURL preserves existing SVG uploads in their data-URI image
// context. SVG is never promoted to an active same-origin logo resource, and
// the Landing projection continues to use the raster-only PublicSiteLogoURL.
func ConsoleSiteLogoURL(rawLogo string) string {
	metadata, content, ok := strings.Cut(strings.TrimSpace(rawLogo), ",")
	mediaType, _, _ := strings.Cut(metadata, ";")
	if ok && content != "" && strings.EqualFold(mediaType, "data:image/svg+xml") {
		return rawLogo
	}
	return PublicSiteLogoURL(rawLogo)
}

// PublicSiteLogoURL keeps data-URI bytes out of public JSON and first-frame
// injection for raster uploads. The binary endpoint and every projection share
// this revision; Console SVG compatibility is handled by ConsoleSiteLogoURL.
func PublicSiteLogoURL(rawLogo string) string {
	logo, ok := DecodePublicSiteLogo(rawLogo)
	if ok {
		return "/api/v1/settings/public?scope=logo&v=" + logo.Revision
	}
	if strings.HasPrefix(strings.ToLower(strings.TrimSpace(rawLogo)), "data:") {
		return ""
	}
	return rawLogo
}

// DecodePublicSiteLogo retains the existing logo format and size contract.
// Authenticated QR images use the stricter complete raster decoder instead.
func DecodePublicSiteLogo(rawLogo string) (PublicSiteLogo, bool) {
	metadata, encoded, ok := strings.Cut(strings.TrimSpace(rawLogo), ",")
	if !ok || encoded == "" || strings.ContainsAny(encoded, " \t\r\n") {
		return PublicSiteLogo{}, false
	}
	metadataParts := strings.Split(metadata, ";")
	if len(metadataParts) != 2 || !strings.EqualFold(metadataParts[1], "base64") {
		return PublicSiteLogo{}, false
	}
	mimeType := strings.ToLower(strings.TrimSpace(strings.TrimPrefix(strings.ToLower(metadataParts[0]), "data:")))
	if !isAllowedPublicSiteLogoMIME(mimeType) || len(encoded) > base64.StdEncoding.EncodedLen(MaxPublicSiteLogoBytes) {
		return PublicSiteLogo{}, false
	}
	content, err := base64.StdEncoding.Strict().DecodeString(encoded)
	if err != nil || len(content) == 0 || len(content) > MaxPublicSiteLogoBytes {
		return PublicSiteLogo{}, false
	}
	hash := sha256.New()
	_, _ = hash.Write([]byte(mimeType))
	_, _ = hash.Write([]byte{0})
	_, _ = hash.Write(content)
	return PublicSiteLogo{
		MIMEType: mimeType,
		Content:  content,
		Revision: hex.EncodeToString(hash.Sum(nil)),
	}, true
}

func isAllowedPublicSiteLogoMIME(mimeType string) bool {
	switch mimeType {
	case "image/avif", "image/gif", "image/jpeg", "image/jpg", "image/png", "image/webp":
		return true
	default:
		return false
	}
}
