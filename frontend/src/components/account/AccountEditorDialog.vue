<template>
  <CreateAccountEditorPanel
    v-if="mode === 'create'"
    :show="show"
    :proxies="proxies"
    :groups="groups"
    @close="emit('close')"
    @created="emit('created')"
  />
  <EditAccountEditorPanel
    v-else
    :show="show"
    :account="account"
    :proxies="proxies"
    :groups="groups"
    @close="emit('close')"
    @updated="emit('updated', $event)"
  />
</template>

<script setup lang="ts">
import type { Account, AdminGroup, Proxy } from '@/types'
import CreateAccountEditorPanel from '@/components/account/editor/CreateAccountEditorPanel.vue'
import EditAccountEditorPanel from '@/components/account/editor/EditAccountEditorPanel.vue'

withDefaults(defineProps<{
  mode: 'create' | 'edit'
  show: boolean
  account?: Account | null
  proxies: Proxy[]
  groups: AdminGroup[]
}>(), {
  account: null,
})

const emit = defineEmits<{
  close: []
  created: []
  updated: [account: Account]
}>()
</script>
