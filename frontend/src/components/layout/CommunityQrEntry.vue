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
          v-show="imageReady && !imageLoading"
          :key="imageObjectUrl"
          :src="imageObjectUrl"
          :alt="imageAlt"
          class="h-auto max-h-[min(62vh,34rem)] w-full rounded-xl object-contain"
          data-testid="community-qr-image"
          @load="handleImageLoad"
          @error="handleImageError"
        />
        <div
          v-if="imageLoading"
          class="flex min-h-56 flex-col items-center justify-center gap-3 px-6 text-center text-sm text-gray-500 dark:text-dark-400"
          data-testid="community-qr-loading"
          role="status"
        >
          <Icon name="refresh" size="lg" class="animate-spin" />
          <span>{{ t('communityQr.loading') }}</span>
        </div>
        <div
          v-else-if="imageLoadFailed"
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
            @click="retryImage"
          >
            {{ t('communityQr.retry') }}
          </button>
        </div>
      </div>
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseDialog from '@/components/common/BaseDialog.vue'
import Icon from '@/components/icons/Icon.vue'
import apiClient from '@/api/client'
import { sanitizeSvg } from '@/utils/sanitize'
import { useAuthStore } from '@/stores/auth'

const { t } = useI18n()
const authStore = useAuthStore()

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
const imageReady = ref(false)
const imageLoadFailed = ref(false)

let activeRequest: AbortController | null = null
let activeLoad: Promise<void> | null = null
let loadGeneration = 0
let loadTimeout: ReturnType<typeof setTimeout> | null = null

function clearLoadTimeout() {
  if (loadTimeout !== null) clearTimeout(loadTimeout)
  loadTimeout = null
}

function releaseImageObjectUrl() {
  if (!imageObjectUrl.value) return
  URL.revokeObjectURL(imageObjectUrl.value)
  imageObjectUrl.value = ''
  imageReady.value = false
}

function canPrewarm(): boolean {
  if (!authStore.token || !authStore.user) return false
  return typeof window.matchMedia !== 'function' || window.matchMedia('(min-width: 640px)').matches
}

async function decodeImage(objectUrl: string) {
  const decoder = new Image()
  decoder.src = objectUrl
  if (typeof decoder.decode === 'function') await decoder.decode()
}

function loadImage(force = false): Promise<void> {
  if (!authStore.token || !authStore.user) return Promise.resolve()
  if (activeLoad && !force) return activeLoad
  if (imageReady.value && !force) return Promise.resolve()

  const generation = ++loadGeneration
  activeRequest?.abort()
  clearLoadTimeout()
  releaseImageObjectUrl()
  imageLoadFailed.value = false
  imageLoading.value = dialogOpen.value

  const controller = new AbortController()
  activeRequest = controller
  // 下载和浏览器解码共享同一超时；预热失败后仍由弹窗提供显式重试。
  loadTimeout = setTimeout(() => {
    if (generation !== loadGeneration) return
    ++loadGeneration
    controller.abort()
    activeRequest = null
    clearLoadTimeout()
    releaseImageObjectUrl()
    imageLoading.value = false
    imageLoadFailed.value = true
  }, 15000)

  const request = (async () => {
    let objectUrl = ''
    try {
      const response = await apiClient.get<Blob>(props.imageEndpoint, {
        responseType: 'blob',
        signal: controller.signal,
      })
      if (generation !== loadGeneration) return

      const image = response.data
      const imageType = image.type.toLowerCase().split(';', 1)[0]
      if (image.size === 0 || !supportedImageTypes.has(imageType)) {
        throw new Error('Unsupported community QR image response')
      }

      objectUrl = URL.createObjectURL(image)
      await decodeImage(objectUrl)
      if (generation !== loadGeneration) {
        URL.revokeObjectURL(objectUrl)
        return
      }
      imageObjectUrl.value = objectUrl
      imageReady.value = true
      imageLoading.value = false
    } catch {
      if (objectUrl) URL.revokeObjectURL(objectUrl)
      if (generation === loadGeneration) {
        imageLoadFailed.value = true
        imageLoading.value = false
      }
    } finally {
      if (generation === loadGeneration) clearLoadTimeout()
      if (activeRequest === controller) activeRequest = null
    }
  })()
  activeLoad = request
  void request.then(() => {
    if (activeLoad === request) activeLoad = null
  })
  return request
}

function isCurrentImage(event: Event): boolean {
  return event.currentTarget instanceof HTMLImageElement &&
    event.currentTarget.getAttribute('src') === imageObjectUrl.value && dialogOpen.value
}

function handleImageLoad(event: Event) {
  if (!isCurrentImage(event)) return
  clearLoadTimeout()
  imageReady.value = true
  imageLoading.value = false
}

function handleImageError(event: Event) {
  if (!isCurrentImage(event)) return
  clearLoadTimeout()
  releaseImageObjectUrl()
  imageLoadFailed.value = true
  imageLoading.value = false
}

function openDialog() {
  if (dialogOpen.value) return
  dialogOpen.value = true
  if (imageReady.value) {
    imageLoading.value = false
    return
  }
  imageLoading.value = !imageLoadFailed.value
  if (!imageLoadFailed.value) void loadImage()
}

function closeDialog() {
  dialogOpen.value = false
  imageLoading.value = false
}

function retryImage() {
  void loadImage(true)
}

function resetImageSession() {
  ++loadGeneration
  activeRequest?.abort()
  activeRequest = null
  activeLoad = null
  clearLoadTimeout()
  releaseImageObjectUrl()
  imageLoadFailed.value = false
  closeDialog()
}

watch(() => props.imageEndpoint, () => {
  resetImageSession()
  if (canPrewarm()) void loadImage()
}, { flush: 'sync' })
watch(
  () => authStore.token && authStore.user ? `${authStore.user.id}:${authStore.user.role}` : '',
  resetImageSession,
  { flush: 'sync' }
)
onMounted(() => {
  if (canPrewarm()) void loadImage()
})
onBeforeUnmount(resetImageSession)
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
