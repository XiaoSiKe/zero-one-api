package service

import (
	"bytes"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"image"
	"image/jpeg"
	"image/png"
	"strings"
	"sync"

	"golang.org/x/image/webp"
	"golang.org/x/sync/singleflight"
)

// MaxCommunityQRImageBytes bounds both persisted and authenticated QR responses.
// QR codes are small raster assets; a tight limit avoids turning settings
// storage into an unbounded binary upload surface.
const (
	MaxCommunityQRImageBytes      = 300 * 1024
	MaxCommunityQRImageDimension  = 4096
	MaxCommunityQRImagePixels     = 16_000_000
	DefaultCommunityQRTitle       = "交流群"
	DefaultCommunityQRDescription = "扫码加入交流群获取支持"
	maxCommunityQRCacheEntries    = 16
	maxCommunityQRCacheBytes      = 5 * 1024 * 1024
)

// CommunityQRImage is the validated authenticated image representation.
// Content may be shared by concurrent responses and must not be modified.
type CommunityQRImage struct {
	MIMEType string
	Content  []byte
}

type communityQRCacheEntry struct {
	fingerprint [sha256.Size]byte
	image       CommunityQRImage
}

// communityQRImageCache caches successful content validation only. Entry
// configuration and role authorization are always checked before consulting it.
// It holds neither the raw data URI nor an authorization decision.
type communityQRImageCache struct {
	mu       sync.Mutex
	entries  []communityQRCacheEntry // most recent first, at most 16 entries
	bytes    int
	inflight singleflight.Group
}

func (c *communityQRImageCache) getOrDecode(rawImage string, decode func(string) (CommunityQRImage, bool)) (CommunityQRImage, bool) {
	fingerprint := sha256.Sum256([]byte(rawImage))
	if image, ok := c.get(fingerprint); ok {
		return image, true
	}
	result, _, _ := c.inflight.Do(string(fingerprint[:]), func() (any, error) {
		if image, ok := c.get(fingerprint); ok {
			return image, nil
		}
		image, ok := decode(rawImage)
		if !ok {
			return nil, nil
		}
		c.remember(fingerprint, image)
		return image, nil
	})
	image, ok := result.(CommunityQRImage)
	return image, ok
}

func (c *communityQRImageCache) get(fingerprint [sha256.Size]byte) (CommunityQRImage, bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	for i, entry := range c.entries {
		if entry.fingerprint == fingerprint {
			copy(c.entries[1:i+1], c.entries[:i])
			c.entries[0] = entry
			return entry.image, true
		}
	}
	return CommunityQRImage{}, false
}

func (c *communityQRImageCache) remember(fingerprint [sha256.Size]byte, image CommunityQRImage) {
	if len(image.Content) > maxCommunityQRCacheBytes {
		return
	}
	c.mu.Lock()
	defer c.mu.Unlock()
	for len(c.entries) >= maxCommunityQRCacheEntries || c.bytes+len(image.Content) > maxCommunityQRCacheBytes {
		last := len(c.entries) - 1
		c.bytes -= len(c.entries[last].image.Content)
		c.entries[last] = communityQRCacheEntry{}
		c.entries = c.entries[:last]
	}
	c.entries = append(c.entries, communityQRCacheEntry{})
	copy(c.entries[1:], c.entries[:len(c.entries)-1])
	c.entries[0] = communityQRCacheEntry{fingerprint: fingerprint, image: image}
	c.bytes += len(image.Content)
}

// NormalizeCommunityQRSettings validates the admin-facing setting pair. The
// image may be retained while the entry is disabled, but enabling requires a
// valid raster image. SVG and other active formats are intentionally excluded.
func NormalizeCommunityQRSettings(enabled bool, rawImage string) (bool, string, error) {
	if rawImage == "" {
		if enabled {
			return false, "", fmt.Errorf("community QR image is required when the entry is enabled")
		}
		return false, "", nil
	}
	if _, ok := DecodeCommunityQRImage(rawImage); !ok {
		return false, "", fmt.Errorf("community QR image must be a valid PNG, JPEG, or WebP base64 data URI no larger than %d KiB", MaxCommunityQRImageBytes/1024)
	}
	return enabled, rawImage, nil
}

// DecodeCommunityQRImage strictly decodes a safe raster data URI. The declared
// MIME selects the decoder, dimensions are bounded before pixel allocation,
// and the complete file is decoded so truncated/corrupt payloads cannot pass
// on their header alone. Whitespace is rejected instead of normalized.
func DecodeCommunityQRImage(rawImage string) (CommunityQRImage, bool) {
	if rawImage == "" || strings.TrimSpace(rawImage) != rawImage || strings.ContainsAny(rawImage, " \t\r\n") {
		return CommunityQRImage{}, false
	}
	metadata, encoded, ok := strings.Cut(rawImage, ",")
	if !ok || encoded == "" || !strings.HasPrefix(metadata, "data:") {
		return CommunityQRImage{}, false
	}
	metadataParts := strings.Split(metadata, ";")
	if len(metadataParts) != 2 || metadataParts[1] != "base64" {
		return CommunityQRImage{}, false
	}
	mimeType := strings.ToLower(strings.TrimPrefix(metadataParts[0], "data:"))
	if !isAllowedCommunityQRMIME(mimeType) || len(encoded) > base64.StdEncoding.EncodedLen(MaxCommunityQRImageBytes) {
		return CommunityQRImage{}, false
	}
	content, err := base64.StdEncoding.Strict().DecodeString(encoded)
	if err != nil || len(content) == 0 || len(content) > MaxCommunityQRImageBytes || !communityQRImageDecodes(mimeType, content) {
		return CommunityQRImage{}, false
	}
	return CommunityQRImage{MIMEType: mimeType, Content: content}, true
}

func isAllowedCommunityQRMIME(mimeType string) bool {
	switch mimeType {
	case "image/png", "image/jpeg", "image/webp":
		return true
	default:
		return false
	}
}

func communityQRImageDecodes(mimeType string, content []byte) bool {
	reader := bytes.NewReader(content)
	var (
		config  image.Config
		decoded image.Image
		err     error
	)

	switch mimeType {
	case "image/png":
		config, err = png.DecodeConfig(reader)
	case "image/jpeg":
		config, err = jpeg.DecodeConfig(reader)
	case "image/webp":
		config, err = webp.DecodeConfig(reader)
	default:
		return false
	}
	if err != nil || !communityQRDimensionsAllowed(config.Width, config.Height) {
		return false
	}

	reader.Reset(content)
	switch mimeType {
	case "image/png":
		decoded, err = png.Decode(reader)
	case "image/jpeg":
		decoded, err = jpeg.Decode(reader)
	case "image/webp":
		decoded, err = webp.Decode(reader)
	}
	if err != nil || decoded == nil {
		return false
	}
	bounds := decoded.Bounds()
	return bounds.Dx() == config.Width && bounds.Dy() == config.Height
}

func communityQRDimensionsAllowed(width, height int) bool {
	if width <= 0 || height <= 0 || width > MaxCommunityQRImageDimension || height > MaxCommunityQRImageDimension {
		return false
	}
	return int64(width)*int64(height) <= MaxCommunityQRImagePixels
}
