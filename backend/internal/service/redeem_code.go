package service

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"strings"
	"time"
)

type RedeemCode struct {
	ID        int64
	Code      string
	Type      string
	Value     float64
	Status    string
	UsedBy    *int64
	UsedAt    *time.Time
	Notes     string
	CreatedAt time.Time
	ExpiresAt *time.Time
	CodeHash  *string
	BatchID   *string
	MinValue  float64
	MaxValue  float64

	GroupID      *int64
	ValidityDays int

	User  *User
	Group *Group
}

// RedeemCodeHash returns the lookup digest used for newly generated, high-entropy codes.
// The plaintext is returned once at creation time and is not persisted.
func RedeemCodeHash(code string) string {
	sum := sha256.Sum256([]byte(code))
	return hex.EncodeToString(sum[:])
}

// RedactedRedeemCode returns a non-redeemable identifier suitable for storage and listings.
func RedactedRedeemCode(code, hash string) string {
	prefix := code
	if len(prefix) > 4 {
		prefix = prefix[:4]
	}
	if len(hash) > 24 {
		hash = hash[:24]
	}
	return strings.ToUpper(prefix) + "-" + hash
}

func (r *RedeemCode) IsCodeRedacted() bool {
	return r != nil && r.CodeHash != nil && r.Code == RedactedRedeemCode(r.Code, *r.CodeHash)
}

func (r *RedeemCode) IsUsed() bool {
	return r.Status == StatusUsed || r.UsedBy != nil || r.UsedAt != nil
}

func (r *RedeemCode) IsExpired() bool {
	return r.IsExpiredAt(time.Now())
}

func (r *RedeemCode) IsExpiredAt(now time.Time) bool {
	if r == nil {
		return false
	}
	if r.Status == StatusExpired {
		return true
	}
	return r.Status == StatusUnused && r.ExpiresAt != nil && !r.ExpiresAt.After(now)
}

func (r *RedeemCode) CanUse() bool {
	return r.Status == StatusUnused && !r.IsUsed() && !r.IsExpired()
}

func GenerateRedeemCode() (string, error) {
	b := make([]byte, 16)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return hex.EncodeToString(b), nil
}
