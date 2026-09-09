<template>
  <AccountEditorDialog
    mode="edit"
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
import AccountEditorDialog from '@/components/account/AccountEditorDialog.vue'

defineProps<{
  show: boolean
  account: Account | null
  proxies: Proxy[]
  groups: AdminGroup[]
}>()

const emit = defineEmits<{
  close: []
  updated: [account: Account]
}>()
</script>
