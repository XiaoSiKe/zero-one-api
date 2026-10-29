// Narrow projections of the existing Console API. The Studio never needs the
// Administrator DTO graph to authenticate or select the current user's key.
export interface ApiResponse<T> { code: number; message: string; data: T }
export interface ApiKey {
    id: number;
    user_id: number;
    name: string;
    key: string;
    status: string;
    quota: number;
    quota_used: number;
    expires_at: string | null;
    group?: { id: number; name: string; platform: string; status: string; allow_image_generation: boolean } | null;
}
