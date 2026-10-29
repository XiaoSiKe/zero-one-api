<template>
  <div v-bind="$attrs" class="space-y-3">
    <div class="navigation-icon-presets grid grid-cols-5 gap-2" role="group" :aria-label="t('admin.settings.customMenu.iconChoices')">
      <button
        v-for="preset in NAVIGATION_ICON_PRESETS"
        :key="preset.id"
        type="button"
        class="flex min-h-11 items-center justify-center rounded-lg border transition-colors"
        :class="
          modelValue === preset.svg
            ? 'border-gray-900 bg-gray-100 text-gray-900 dark:border-white dark:bg-dark-700 dark:text-white'
            : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:bg-gray-50 dark:border-dark-600 dark:text-gray-300 dark:hover:border-dark-500 dark:hover:bg-dark-700'
        "
        :aria-label="t(preset.labelKey)"
        :aria-pressed="modelValue === preset.svg"
        :title="t(preset.labelKey)"
        :data-testid="`navigation-icon-preset-${preset.id}`"
        @click="emit('update:modelValue', preset.svg)"
      >
        <span
          class="h-5 w-5 [&>svg]:h-full [&>svg]:w-full"
          v-html="sanitizeSvg(preset.svg)"
        />
      </button>
    </div>

    <ImageUpload
      :model-value="modelValue"
      mode="svg"
      size="sm"
      :upload-label="t('admin.settings.customMenu.uploadSvg')"
      :remove-label="t('admin.settings.customMenu.removeSvg')"
      :hint="t('admin.settings.customMenu.iconHint')"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

import { useI18n } from 'vue-i18n'
import ImageUpload from '@/components/common/ImageUpload.vue'
import { NAVIGATION_ICON_PRESETS } from '@/constants/navigationIcons'
import { sanitizeSvg } from '@/utils/sanitize'

defineProps<{ modelValue: string }>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const { t } = useI18n()
</script>

<style scoped>
.navigation-icon-presets {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
}
.navigation-icon-presets > button {
  min-width: 0;
  min-height: 44px;
}
@media (max-width: 480px) {
  .navigation-icon-presets { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
</style>
