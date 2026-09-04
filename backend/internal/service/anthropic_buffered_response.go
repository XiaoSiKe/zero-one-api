package service

import (
	"encoding/json"

	"github.com/Wei-Shaw/sub2api/internal/pkg/apicompat"
)

// anthropicBufferedResponse owns buffered event assembly. Transport parsing,
// read deadlines and downstream response formats stay with the gateway callers.
type anthropicBufferedResponse struct {
	response *apicompat.AnthropicResponse
	usage    ClaudeUsage
}

func (b *anthropicBufferedResponse) add(event apicompat.AnthropicStreamEvent) {
	switch event.Type {
	case "message_start":
		if event.Message != nil {
			b.response = event.Message
			mergeAnthropicUsage(&b.usage, event.Message.Usage)
		}
	case "message_delta":
		if event.Usage != nil {
			mergeAnthropicUsage(&b.usage, *event.Usage)
		}
		if event.Delta != nil && event.Delta.StopReason != "" && b.response != nil {
			b.response.StopReason = apicompat.AnthropicStopReasonPtr(event.Delta.StopReason)
		}
	case "content_block_start":
		if event.ContentBlock != nil && b.response != nil {
			b.response.Content = append(b.response.Content, *event.ContentBlock)
		}
	case "content_block_delta":
		if event.Delta == nil || b.response == nil || event.Index == nil {
			return
		}
		idx := *event.Index
		if idx < 0 || idx >= len(b.response.Content) {
			return
		}
		block := &b.response.Content[idx]
		switch event.Delta.Type {
		case "text_delta":
			block.Text += event.Delta.Text
		case "thinking_delta":
			block.Thinking += event.Delta.Thinking
		case "input_json_delta":
			block.Input = appendRawJSON(block.Input, event.Delta.PartialJSON)
		}
	}
}

func (b *anthropicBufferedResponse) finish() (*apicompat.AnthropicResponse, ClaudeUsage) {
	if b.response != nil && (b.usage.InputTokens > 0 || b.usage.OutputTokens > 0) {
		b.response.Usage = apicompat.AnthropicUsage{
			InputTokens:              b.usage.InputTokens,
			OutputTokens:             b.usage.OutputTokens,
			CacheCreationInputTokens: b.usage.CacheCreationInputTokens,
			CacheReadInputTokens:     b.usage.CacheReadInputTokens,
		}
	}
	return b.response, b.usage
}

func mergeAnthropicUsage(dst *ClaudeUsage, src apicompat.AnthropicUsage) {
	if dst == nil {
		return
	}

	// Some Anthropic-compatible providers retain OpenAI-style prompt/cache
	// fields. Prefer those authoritative totals or hit/miss buckets over the
	// overloaded input_tokens field. This covers Kimi's changing stream
	// semantics as well as GLM/DeepSeek cache aliases.
	if src.PromptTokens > 0 || src.PromptCacheHitTokens != nil || src.PromptCacheMissTokens != nil {
		cacheReadTokens := src.CacheReadInputTokens
		if cacheReadTokens == 0 && src.CachedTokens > 0 {
			cacheReadTokens = src.CachedTokens
		}
		if cacheReadTokens == 0 && src.PromptTokensDetails != nil && src.PromptTokensDetails.CachedTokens > 0 {
			cacheReadTokens = src.PromptTokensDetails.CachedTokens
		}
		if cacheReadTokens == 0 && src.PromptCacheHitTokens != nil {
			cacheReadTokens = max(*src.PromptCacheHitTokens, 0)
		}

		if src.PromptCacheMissTokens != nil {
			dst.InputTokens = max(*src.PromptCacheMissTokens, 0)
		} else {
			dst.InputTokens = max(src.PromptTokens-cacheReadTokens-src.CacheCreationInputTokens, 0)
		}
		dst.CacheReadInputTokens = cacheReadTokens
		dst.CacheCreationInputTokens = src.CacheCreationInputTokens
	} else {
		if src.InputTokens > 0 {
			dst.InputTokens = src.InputTokens
		}
		if src.CacheReadInputTokens > 0 {
			dst.CacheReadInputTokens = src.CacheReadInputTokens
		} else if src.CachedTokens > 0 {
			dst.CacheReadInputTokens = src.CachedTokens
		}
		if src.CacheCreationInputTokens > 0 {
			dst.CacheCreationInputTokens = src.CacheCreationInputTokens
		}
	}
	if src.OutputTokens > 0 {
		dst.OutputTokens = src.OutputTokens
	}
}

// appendRawJSON appends tool-input fragments after the initial empty object.
func appendRawJSON(existing json.RawMessage, fragment string) json.RawMessage {
	// Anthropic initializes tool_use.input to {} in content_block_start, then
	// streams the actual input through input_json_delta events. Treat that empty
	// object as a placeholder instead of prefixing it to the streamed JSON.
	var existingObject map[string]json.RawMessage
	isEmptyObject := json.Unmarshal(existing, &existingObject) == nil && existingObject != nil && len(existingObject) == 0
	if len(existing) == 0 || isEmptyObject {
		return json.RawMessage(fragment)
	}
	return json.RawMessage(string(existing) + fragment)
}
