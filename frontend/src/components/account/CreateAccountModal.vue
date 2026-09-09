<template>
  <AccountEditorDialog
    mode="create"
    :show="show"
    :proxies="proxies"
    :groups="groups"
    @close="emit('close')"
    @created="emit('created')"
  />
</template>

<script setup lang="ts">
import type { AdminGroup, Proxy } from '@/types'
import AccountEditorDialog from '@/components/account/AccountEditorDialog.vue'

defineProps<{
  show: boolean
  proxies: Proxy[]
  groups: AdminGroup[]
}>()

const emit = defineEmits<{
  close: []
  created: []
}>()
</script>
