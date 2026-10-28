package schema

import (
	"time"

	"github.com/Wei-Shaw/sub2api/internal/domain"

	"entgo.io/ent"
	"entgo.io/ent/dialect"
	"entgo.io/ent/dialect/entsql"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

// RedeemCode holds the schema definition for the RedeemCode entity.
//
// 未领取的兑换码允许物理删除。status=used、used_by 或 used_at 中任一领取标记
// 都是必须保留的 Redeem Claim；管理操作不得删除、清空或重置这些记录。
// schema 的物理删除能力不替代 service/repository 的事务校验。
// 邀请注册内部的失败回滚遵循独立的回滚合同。
type RedeemCode struct {
	ent.Schema
}

func (RedeemCode) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entsql.Annotation{Table: "redeem_codes"},
	}
}

func (RedeemCode) Fields() []ent.Field {
	return []ent.Field{
		field.String("code").
			MaxLen(32).
			NotEmpty().
			Unique(),
		field.String("code_hash").
			MaxLen(64).
			Optional().
			Nillable(),
		field.String("batch_id").
			MaxLen(32).
			Optional().
			Nillable(),
		field.String("type").
			MaxLen(20).
			Default(domain.RedeemTypeBalance),
		field.Float("value").
			SchemaType(map[string]string{dialect.Postgres: "decimal(20,8)"}).
			Default(0),
		field.Float("min_value").
			SchemaType(map[string]string{dialect.Postgres: "decimal(20,8)"}).
			Default(0),
		field.Float("max_value").
			SchemaType(map[string]string{dialect.Postgres: "decimal(20,8)"}).
			Default(0),
		field.String("status").
			MaxLen(20).
			Default(domain.StatusUnused),
		field.Int64("used_by").
			Optional().
			Nillable(),
		field.Time("used_at").
			Optional().
			Nillable().
			SchemaType(map[string]string{dialect.Postgres: "timestamptz"}),
		field.String("notes").
			Optional().
			Nillable().
			SchemaType(map[string]string{dialect.Postgres: "text"}),
		field.Time("created_at").
			Immutable().
			Default(time.Now).
			SchemaType(map[string]string{dialect.Postgres: "timestamptz"}),
		field.Time("expires_at").
			Optional().
			Nillable().
			SchemaType(map[string]string{dialect.Postgres: "timestamptz"}),
		field.Int64("group_id").
			Optional().
			Nillable(),
		field.Int("validity_days").
			Default(30),
	}
}

func (RedeemCode) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("user", User.Type).
			Ref("redeem_codes").
			Field("used_by").
			Unique(),
		edge.From("group", Group.Type).
			Ref("redeem_codes").
			Field("group_id").
			Unique(),
	}
}

func (RedeemCode) Indexes() []ent.Index {
	return []ent.Index{
		// code 字段已在 Fields() 中声明 Unique()，无需重复索引
		index.Fields("status"),
		index.Fields("used_by"),
		index.Fields("group_id"),
		index.Fields("expires_at"),
		index.Fields("code_hash").
			Unique().
			Annotations(entsql.IndexWhere("code_hash IS NOT NULL")),
		index.Fields("batch_id", "used_by").
			Unique().
			Annotations(entsql.IndexWhere("batch_id IS NOT NULL AND used_by IS NOT NULL")),
	}
}
