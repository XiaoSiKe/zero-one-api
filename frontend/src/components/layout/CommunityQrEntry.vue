<template>
  <button
    type="button"
    class="hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 dark:text-dark-400 dark:hover:bg-dark-800 dark:hover:text-white dark:focus-visible:ring-white/20 sm:flex"
    :data-testid="testId"
    :aria-label="triggerAriaLabel"
    @click="openDialog"
  >
    <span
      v-if="iconSvg"
      class="h-4 w-4 [&>svg]:h-full [&>svg]:w-full"
      v-html="sanitizedIconSvg"
    />
    <Icon v-else name="users" size="sm" />
    <span>{{ dialogTitle }}</span>
  </button>

  <BaseDialog
    :show="dialogOpen"
    :title="dialogTitle"
    width="narrow"
    panel-class="community-qr-dialog-surface"
    :close-on-click-outside="true"
    @close="closeDialog"
  >
    <div data-testid="community-qr-dialog" class="space-y-4">
      <p v-if="dialogDescription" class="community-qr-dialog-description text-sm">
        {{ dialogDescription }}
      </p>

      <div
        class="community-qr-image-frame flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border p-3"
      >
        <img
          v-if="imageObjectUrl"
          :src="imageObjectUrl"
          :alt="imageAlt"
          class="h-auto max-h-[min(62vh,34rem)] w-full rounded-xl object-contain"
          data-testid="community-qr-image"
          @error="handleImageError"
        />
        <div
          v-else-if="imageLoading"
          class="flex min-h-56 flex-col items-center justify-center gap-3 px-6 text-center text-sm text-gray-500 dark:text-dark-400"
          data-testid="community-qr-loading"
          role="status"
        >
          <Icon name="refresh" size="lg" class="animate-spin" />
          <span>{{ t('communityQr.loading') }}</span>
        </div>
        <div
          v-else
          class="flex min-h-56 flex-col items-center justify-center gap-3 px-6 text-center text-sm text-gray-500 dark:text-dark-400"
          data-testid="community-qr-error"
          role="alert"
        >
          <Icon name="exclamationCircle" size="lg" />
          <span>{{ t('communityQr.loadFailed') }}</span>
          <button
            type="button"
            class="rounded-lg border border-gray-200 bg-white px-3 py-1.5 font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 dark:border-dark-700 dark:bg-dark-900 dark:text-dark-200 dark:hover:bg-dark-800 dark:focus-visible:ring-white/20"
            data-testid="community-qr-retry"
            @click="loadImage"
          >
            {{ t('communityQr.retry') }}
          </button>
        </div>
      </div>
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseDialog from '@/components/common/BaseDialog.vue'
import Icon from '@/components/icons/Icon.vue'
import apiClient from '@/api/client'
import { sanitizeSvg } from '@/utils/sanitize'

const { t } = useI18n()

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  imageEndpoint?: string
  testId?: string
  iconSvg?: string
}>(), {
  title: '',
  description: '',
  imageEndpoint: '/settings/community-qr',
  testId: 'community-qr-button',
  iconSvg: '',
})

const dialogTitle = computed(() => props.title.trim() || t('communityQr.title'))
const dialogDescription = computed(() =>
  props.description.trim() || t('communityQr.description')
)
const triggerAriaLabel = computed(() => `${t('communityQr.open')}: ${dialogTitle.value}`)
const imageAlt = computed(() => `${dialogTitle.value}: ${t('communityQr.imageAlt')}`)
const sanitizedIconSvg = computed(() => sanitizeSvg(props.iconSvg))

const supportedImageTypes = new Set(['image/png', 'image/jpeg', 'image/webp'])
const dialogOpen = ref(false)
const imageLoading = ref(false)
const imageObjectUrl = ref('')

let activeRequest: AbortController | null = null
let loadGeneration = 0

function releaseImageObjectUrl() {
  if (!imageObjectUrl.value) return
  URL.revokeObjectURL(imageObjectUrl.value)
  imageObjectUrl.value = ''
}

async function loadImage() {
  const generation = ++loadGeneration
  activeRequest?.abort()
  releaseImageObjectUrl()
  imageLoading.value = true

  const controller = new AbortController()
  activeRequest = controller

  try {
    const response = await apiClient.get<Blob>(props.imageEndpoint, {
      responseType: 'blob',
      signal: controller.signal,
    })
    if (generation !== loadGeneration || !dialogOpen.value) return

    const image = response.data
    const imageType = image.type.toLowerCase().split(';', 1)[0]
    if (image.size === 0 || !supportedImageTypes.has(imageType)) {
      throw new Error('Unsupported community QR image response')
    }

    const objectUrl = URL.createObjectURL(image)
    if (generation !== loadGeneration || !dialogOpen.value) {
      URL.revokeObjectURL(objectUrl)
      return
    }
    imageObjectUrl.value = objectUrl
  } catch {
    // The template shows the retryable error state once a live request fails.
  } finally {
    if (generation === loadGeneration) {
      imageLoading.value = false
      if (activeRequest === controller) activeRequest = null
    }
  }
}

function handleImageError() {
  releaseImageObjectUrl()
}

function openDialog() {
  dialogOpen.value = true
  void loadImage()
}

function closeDialog() {
  ++loadGeneration
  activeRequest?.abort()
  activeRequest = null
  releaseImageObjectUrl()
  dialogOpen.value = false
  imageLoading.value = false
}

onBeforeUnmount(() => {
  ++loadGeneration
  activeRequest?.abort()
  releaseImageObjectUrl()
})
</script>

<style scoped>
:global(.community-qr-dialog-surface) {
  border-color: rgb(63 63 70) !important;
  background: rgb(5 5 5) !important;
  color: rgb(250 250 250);
}

:global(.community-qr-dialog-surface .modal-header) {
  border-color: rgb(39 39 42) !important;
}

:global(.community-qr-dialog-surface .modal-title) {
  color: rgb(250 250 250) !important;
}

:global(.community-qr-dialog-surface .modal-header button) {
  color: rgb(161 161 170) !important;
}

:global(.community-qr-dialog-surface .modal-header button:hover) {
  background: rgb(39 39 42) !important;
  color: rgb(250 250 250) !important;
}

.community-qr-dialog-description {
  color: rgb(161 161 170);
}

.community-qr-image-frame {
  border-color: rgb(244 244 245);
  background: rgb(228 228 231);
}
</style>
