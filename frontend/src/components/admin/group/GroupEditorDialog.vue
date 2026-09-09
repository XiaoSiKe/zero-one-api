<template>
  <BaseDialog :show="show" :title="title" width="normal" @close="emit('close')">
    <form
      v-if="ready"
      :id="formId"
      class="space-y-5"
      @submit.prevent="emit('submit')"
    >
      <slot />
    </form>

    <template #footer>
      <div class="flex justify-end gap-3 pt-4">
        <button type="button" class="btn btn-secondary" @click="emit('close')">
          {{ t('common.cancel') }}
        </button>
        <button
          type="submit"
          :form="formId"
          :disabled="submitting"
          class="btn btn-primary"
          data-tour="group-form-submit"
        >
          <svg
            v-if="submitting"
            class="-ml-1 mr-2 h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {{ submitting ? pendingLabel : submitLabel }}
        </button>
      </div>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseDialog from '@/components/common/BaseDialog.vue'

const props = withDefaults(defineProps<{
  mode: 'create' | 'edit'
  show: boolean
  title: string
  ready?: boolean
  submitting: boolean
}>(), {
  ready: true,
})

const emit = defineEmits<{
  close: []
  submit: []
}>()

const { t } = useI18n()
const formId = computed(() => `${props.mode}-group-form`)
const pendingLabel = computed(() => t(props.mode === 'edit' ? 'admin.groups.updating' : 'admin.groups.creating'))
const submitLabel = computed(() => t(props.mode === 'edit' ? 'common.update' : 'common.create'))
</script>
