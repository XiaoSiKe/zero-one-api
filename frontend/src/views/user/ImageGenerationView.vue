<template>
  <div class="online-image-module space-y-6">
    <div class="online-image-layout" data-testid="image-generation-form">
      <section class="card space-y-5 p-5">
        <a
          href="/keys"
          class="btn btn-secondary btn-specular w-full"
          data-testid="create-image-api-key"
          data-online-image-action
          @click="navigateInsideConsole($event, '/keys')"
        >
          <Icon name="key" size="md" />
          <span>{{ t('imageGeneration.controls.createImageApiKey') }}</span>
        </a>

        <div data-testid="api-key-row">
          <label class="input-label mb-1.5 block">{{ t('imageGeneration.controls.apiKey') }}</label>
          <div class="api-key-control-row">
            <Select
              v-model="selectedKeyId"
              data-testid="api-key-select"
              :aria-label="t('imageGeneration.controls.apiKey')"
              :options="apiKeyOptions"
              :placeholder="t('common.selectOption')"
              :disabled="accessLoading || allowedImageKeys.length === 0"
              :loading="accessLoading"
              :empty-text="accessLoading ? t('common.loading') : t('common.noOptionsFound')"
            />
            <button
              type="button"
              class="btn btn-secondary btn-specular api-key-refresh"
              data-testid="refresh-keys"
              data-online-image-action
              :disabled="accessLoading || modelsLoading"
              @click="refreshKeys"
            >
              <Icon name="refresh" size="md" :class="{ 'animate-spin': accessLoading || modelsLoading }" />
              <span>{{ t('imageGeneration.controls.refreshKeys') }}</span>
            </button>
          </div>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {{ t('imageGeneration.hints.apiKey') }}
          </p>
          <p v-if="selectedKeyDescription" class="mt-1 text-xs text-gray-400 dark:text-gray-500">
            {{ selectedKeyDescription }}
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2" data-testid="model-count-row">
          <div>
            <label class="input-label mb-1.5 block" data-testid="model-select-label">
              {{ t('imageGeneration.controls.modelSelection') }}
            </label>
            <Select
              v-model="selectedModel"
              data-testid="model-select"
              :aria-label="t('imageGeneration.controls.modelSelection')"
              :options="modelOptions"
              :placeholder="t('common.selectOption')"
              :disabled="!selectedKey || modelsLoading || modelOptions.length === 0"
              :loading="modelsLoading"
              :empty-text="modelsLoading ? t('common.loading') : t('common.noOptionsFound')"
              searchable
            />
            <p v-if="modelHint" class="mt-1 text-xs" :class="modelsError ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'">
              {{ modelHint }}
            </p>
          </div>
          <div>
            <label class="input-label mb-1.5 block">{{ t('imageGeneration.controls.count') }}</label>
            <input v-model="count" type="number" min="1" max="4" class="input w-full" />
          </div>
        </div>

        <div data-testid="size-control">
          <label class="input-label mb-1.5 block">{{ t('imageGeneration.controls.imageSize') }}</label>
          <button
            type="button"
            data-testid="image-size-trigger"
            class="btn btn-secondary btn-specular online-image-control flex w-full items-center justify-between gap-2 text-left"
            data-online-image-action
            :aria-label="t('imageGeneration.sizeDialog.title')"
            @click="openSizeDialog"
          >
            <span class="truncate">{{ sizeLabel }}</span>
            <Icon name="chevronDown" size="sm" class="flex-shrink-0" />
          </button>
        </div>

        <div class="grid gap-4 sm:grid-cols-2" data-testid="quality-format-row">
          <div>
            <label class="input-label mb-1.5 block">{{ t('imageGeneration.controls.quality') }}</label>
            <Select v-model="quality" :options="qualityOptions" data-testid="quality-select" />
          </div>
          <div>
            <label class="input-label mb-1.5 block">{{ t('imageGeneration.controls.responseFormat') }}</label>
            <Select v-model="responseFormat" :options="responseFormatOptions" data-testid="response-format-select" />
          </div>
        </div>

        <div class="space-y-2" data-testid="reference-images-panel">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <label for="reference-image-input" class="input-label">
              {{ t('imageGeneration.controls.referenceImages') }}
            </label>
            <button
              v-if="referenceImages.length > 0"
              type="button"
              class="btn btn-secondary btn-specular btn-sm"
              data-online-image-action
              @click="clearReferenceImages"
            >
              {{ t('imageGeneration.controls.clearReferenceImages') }}
            </button>
          </div>
          <input
            id="reference-image-input"
            ref="referenceInput"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            multiple
            class="sr-only"
            @change="onReferenceInput"
          />
          <div
            class="rounded-lg border-2 border-dashed p-4 transition-colors"
            :class="dragging
              ? 'border-gray-600 bg-gray-100 dark:border-gray-300 dark:bg-dark-700'
              : 'border-gray-300 bg-gray-50 hover:border-gray-500 dark:border-dark-600 dark:bg-dark-900/50 dark:hover:border-gray-400'"
            role="button"
            tabindex="0"
            @click="chooseReferenceImages"
            @keydown.enter.prevent="chooseReferenceImages"
            @keydown.space.prevent="chooseReferenceImages"
            @dragenter.prevent="dragging = true"
            @dragover.prevent="dragging = true"
            @dragleave.prevent="dragging = false"
            @drop.prevent="onReferenceDrop"
          >
            <div v-if="referenceImages.length > 0" class="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div
                v-for="image in referenceImages"
                :key="image.id"
                class="group relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
              >
                <img :src="image.previewUrl" :alt="image.file.name" class="h-full w-full object-cover" />
                <button
                  type="button"
                  class="absolute right-1.5 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-white text-gray-900 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100"
                  :aria-label="t('imageGeneration.controls.removeReferenceImage')"
                  @click.stop="removeReferenceImage(image.id)"
                >
                  <Icon name="x" size="sm" />
                </button>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap items-center gap-3 first:mt-0">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-700 dark:bg-dark-700 dark:text-gray-200">
                <Icon name="upload" size="md" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {{ t('imageGeneration.controls.referenceImagesDrop') }}
                </p>
                <p class="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {{ t('imageGeneration.hints.referenceImages') }}
                </p>
              </div>
              <button
                type="button"
                class="btn btn-secondary btn-specular btn-sm flex-shrink-0"
                data-online-image-action
                @click.stop="chooseReferenceImages"
              >
                <Icon name="upload" size="sm" />
                {{ t('imageGeneration.controls.chooseReferenceImages') }}
              </button>
            </div>
          </div>
          <p v-if="referenceImages.length > 0" class="text-xs text-gray-500 dark:text-gray-400">
            {{ t('imageGeneration.hints.referenceImagesSelected', { count: referenceImages.length }) }}
          </p>
          <p v-if="referenceError" class="text-xs text-red-500">{{ referenceError }}</p>
        </div>

        <a
          :href="imageTutorialPath || undefined"
          class="btn btn-secondary btn-specular w-full"
          :class="{ 'pointer-events-none opacity-50': !imageTutorialPath }"
          data-testid="image-tutorial-link"
          data-online-image-action
          :aria-disabled="!imageTutorialPath"
          :tabindex="imageTutorialPath ? undefined : -1"
          :title="imageTutorialPath ? undefined : t('imageGeneration.hints.imageTutorialUnavailable')"
          @click="navigateInsideConsole($event, imageTutorialPath)"
        >
          <Icon name="book" size="md" />
          <span>{{ t('imageGeneration.controls.imageTutorial') }}</span>
        </a>

      </section>

      <section class="space-y-4" data-testid="right-column">
        <div class="card space-y-4 p-5" data-testid="prompt-panel">
          <div>
            <label class="input-label mb-1.5 block">{{ t('imageGeneration.controls.prompt') }}</label>
            <textarea
              v-model="prompt"
              rows="5"
              class="input min-h-32 w-full resize-y"
              :placeholder="t('imageGeneration.controls.prompt')"
            />
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ t('imageGeneration.hints.responseFormat') }}
            </p>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-specular w-full"
            data-testid="start-generation"
            data-online-image-action
            :disabled="generateDisabled"
            @click="submitGeneration"
          >
            <Icon name="sparkles" size="md" :class="{ 'animate-pulse': generating }" />
            <span>{{ generating ? t('imageGeneration.controls.generating') : t('imageGeneration.controls.generate') }}</span>
          </button>
        </div>

        <div class="card p-5" data-testid="results-panel">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ t('imageGeneration.results.title') }}
              </h2>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ resultHint }}</p>
            </div>
            <span v-if="resultModel" class="badge badge-gray">{{ resultModel }}</span>
          </div>
          <div v-if="results.length === 0" class="flex min-h-[360px] flex-col items-center justify-center py-8 text-center">
            <Icon name="sparkles" size="xl" class="mb-4 text-gray-400 dark:text-dark-500" />
            <p class="text-lg font-medium text-gray-900 dark:text-gray-100">
              {{ t('imageGeneration.results.empty') }}
            </p>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ t('imageGeneration.results.emptyHint') }}
            </p>
          </div>
          <div v-else class="mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
            <article
              v-for="image in results"
              :key="image.id"
              class="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800"
            >
              <div class="bg-gray-50 dark:bg-dark-900">
                <img :src="image.src" :alt="image.prompt" class="aspect-square w-full object-contain" />
              </div>
              <div class="space-y-3 p-4">
                <p class="text-sm leading-6 text-gray-700 dark:text-gray-300">{{ image.prompt }}</p>
                <p v-if="image.revisedPrompt" class="text-xs text-gray-500 dark:text-gray-400">
                  {{ t('imageGeneration.results.revisedPrompt') }}: {{ image.revisedPrompt }}
                </p>
                <div class="grid grid-cols-2 gap-2">
                  <button type="button" class="btn btn-secondary btn-specular btn-sm" data-online-image-action @click="downloadImage(image)">
                    <Icon name="download" size="sm" />
                    {{ t('imageGeneration.results.download') }}
                  </button>
                  <button type="button" class="btn btn-secondary btn-specular btn-sm" data-online-image-action @click="openImage(image)">
                    <Icon name="externalLink" size="sm" />
                    {{ t('imageGeneration.results.open') }}
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="card p-5">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ t('imageGeneration.history.title') }}
              </h2>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {{ t('imageGeneration.history.hint') }}
              </p>
            </div>
            <button
              type="button"
              class="btn btn-secondary btn-specular btn-sm flex-shrink-0"
              data-online-image-action
              :disabled="history.length === 0 || historyLoading"
              @click="clearHistory"
            >
              <Icon name="trash" size="sm" />
              {{ t('imageGeneration.history.clear') }}
            </button>
          </div>
          <div v-if="historyLoading" class="flex min-h-24 items-center justify-center py-6 text-sm text-gray-500 dark:text-gray-400">
            {{ t('common.loading') }}
          </div>
          <div v-else-if="history.length === 0" class="py-8 text-center text-sm text-gray-400 dark:text-gray-500">
            {{ t('imageGeneration.history.empty') }}
          </div>
          <div v-else class="mt-4 space-y-4">
            <article v-for="entry in history" :key="entry.id" class="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-700">
              <div class="border-b border-gray-100 px-4 py-3 dark:border-dark-700">
                <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>{{ formatHistoryDate(entry.createdAt) }}</span><span aria-hidden="true">·</span>
                  <span>{{ entry.model }}</span><span aria-hidden="true">·</span>
                  <span>{{ entry.sizeLabel }}</span><span aria-hidden="true">·</span>
                  <span>{{ entry.imageSize }}</span>
                </div>
                <p class="mt-2 line-clamp-2 text-sm leading-6 text-gray-700 dark:text-gray-300">{{ entry.prompt }}</p>
              </div>
              <div class="grid grid-cols-2 gap-3 bg-gray-50 p-3 dark:bg-dark-900 sm:grid-cols-4">
                <div v-for="image in entry.images" :key="image.id" class="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800">
                  <img :src="image.src" :alt="image.prompt" class="aspect-square w-full object-contain" loading="lazy" />
                  <div class="grid grid-cols-2 gap-2 border-t border-gray-100 p-2 dark:border-dark-700">
                    <button type="button" class="btn btn-secondary btn-specular btn-sm px-2" data-online-image-action :aria-label="t('imageGeneration.history.download')" @click="downloadImage(image)">
                      <Icon name="download" size="sm" />
                    </button>
                    <button type="button" class="btn btn-secondary btn-specular btn-sm px-2" data-online-image-action :aria-label="t('imageGeneration.history.open')" @click="openImage(image)">
                      <Icon name="externalLink" size="sm" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>

    <BaseDialog
      :show="sizeDialogOpen"
      :title="t('imageGeneration.sizeDialog.title')"
      width="normal"
      data-testid="image-size-dialog"
      @close="closeSizeDialog"
    >
      <div class="space-y-5">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ t('imageGeneration.sizeDialog.current', { size: sizeLabel }) }}
        </p>
        <div>
          <h4 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('imageGeneration.sizeDialog.resolution') }}
          </h4>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="resolution in resolutions"
              :key="resolution"
              type="button"
              :class="['btn btn-specular', draftResolution === resolution ? 'btn-primary' : 'btn-secondary']"
              data-online-image-action
              :aria-pressed="draftResolution === resolution"
              @click="draftResolution = resolution"
            >
              {{ resolution }}
            </button>
          </div>
        </div>
        <div>
          <h4 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('imageGeneration.sizeDialog.aspectRatio') }}
          </h4>
          <div class="grid grid-cols-4 gap-2 sm:gap-3">
            <button
              v-for="ratio in aspectRatios"
              :key="ratio.value"
              type="button"
              :class="['btn btn-specular min-h-[72px] flex-col px-1.5 text-xs', draftAspectRatio === ratio.value ? 'btn-primary' : 'btn-secondary']"
              data-online-image-action
              :aria-pressed="draftAspectRatio === ratio.value"
              @click="draftAspectRatio = ratio.value"
            >
              <span class="block rounded-[3px] border border-current" :class="ratio.previewClass" />
              <span>{{ ratio.label }}</span>
            </button>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-4 dark:border-dark-600">
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('imageGeneration.sizeDialog.output') }}</p>
          <p class="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{{ draftOutputSize }}</p>
        </div>
      </div>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <button type="button" class="btn btn-secondary btn-specular" data-online-image-action @click="closeSizeDialog">
            {{ t('imageGeneration.sizeDialog.cancel') }}
          </button>
          <button type="button" class="btn btn-primary btn-specular" data-online-image-action @click="applySize">
            {{ t('imageGeneration.sizeDialog.confirm') }}
          </button>
        </div>
      </template>
    </BaseDialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseDialog from '@/components/common/BaseDialog.vue'
import Select, { type SelectOption } from '@/components/common/Select.vue'
import Icon from '@/components/icons/Icon.vue'
import { generateImage, listAccessibleImageModels, type ImageGenerationData } from '@/features/online-image/api'
import {
  clearImageGenerationHistory,
  readImageGenerationHistory,
  saveImageGenerationHistoryEntry,
  type ImageGenerationHistoryEntry,
  type ImageGenerationHistoryImage,
} from '@/features/online-image/history'
import { useImageGenerationAccess } from '@/composables/useImageGenerationAccess'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'
import { useAdminSettingsStore } from '@/stores/adminSettings'
import { extractApiErrorMessage } from '@/utils/apiError'
import { resolveImageTutorialPath } from '@/utils/image-tutorial'

interface ReferenceImage {
  id: string
  file: File
  previewUrl: string
}

type PreviewImage = ImageGenerationHistoryImage
type HistoryEntry = ImageGenerationHistoryEntry

const { t } = useI18n()
const appStore = useAppStore()
const authStore = useAuthStore()
const adminSettingsStore = useAdminSettingsStore()
const imageTutorialPath = computed(() => {
  if (authStore.isAdmin) {
    const adminPath = resolveImageTutorialPath(adminSettingsStore.customMenuItems)
    if (adminPath || adminSettingsStore.loaded) return adminPath
  }
  return resolveImageTutorialPath(appStore.cachedPublicSettings?.custom_menu_items)
})

function navigateInsideConsole(event: MouseEvent, path: string): void {
  if (!path) return
  event.preventDefault()
  const sidebarLink = [...document.querySelectorAll<HTMLAnchorElement>('aside a[href]')]
    .find((link) => link.getAttribute('href') === path)
  if (sidebarLink) {
    sidebarLink.click()
    return
  }
  const approvedApp = document.querySelector('#app') as (HTMLElement & {
    __vue_app__?: {
      config?: { globalProperties?: { $router?: { push(path: string): Promise<unknown> } } }
    }
  }) | null
  const router = approvedApp?.__vue_app__?.config?.globalProperties?.$router
  if (router) {
    void router.push(path)
    return
  }
  window.location.assign(path)
}
const {
  allowedImageKeys,
  imageGenerationAccessLoading: accessLoading,
  refreshImageGenerationAccess,
} = useImageGenerationAccess()

const selectedKeyId = ref<number | null>(null)
const selectedModel = ref<string | null>(null)
const availableModels = ref<string[]>([])
const modelsLoading = ref(false)
const modelsError = ref('')
let modelsController: AbortController | null = null
let modelsRevision = 0

const count = ref('1')
const prompt = ref('')
const resolution = ref('2K')
const aspectRatio = ref('9:16')
const imageSize = ref('1152x2048')
const quality = ref<string | number | boolean | null>('high')
const responseFormat = ref<string | number | boolean | null>('b64_json')
const generating = ref(false)
const results = ref<PreviewImage[]>([])
const resultModel = ref('')
const resultHint = ref(t('imageGeneration.results.emptyHint'))

const referenceInput = ref<HTMLInputElement | null>(null)
const referenceImages = ref<ReferenceImage[]>([])
const referenceError = ref('')
const dragging = ref(false)

const sizeDialogOpen = ref(false)
const draftResolution = ref(resolution.value)
const draftAspectRatio = ref(aspectRatio.value)
const resolutions = ['1K', '2K', '4K']
const aspectRatios = [
  { label: '1:1', value: '1:1', previewClass: 'h-5 w-5' },
  { label: '3:2', value: '3:2', previewClass: 'h-4 w-6' },
  { label: '2:3', value: '2:3', previewClass: 'h-6 w-4' },
  { label: '16:9', value: '16:9', previewClass: 'h-4 w-7' },
  { label: '9:16', value: '9:16', previewClass: 'h-7 w-4' },
  { label: '4:3', value: '4:3', previewClass: 'h-5 w-6' },
  { label: '3:4', value: '3:4', previewClass: 'h-6 w-5' },
  { label: '21:9', value: '21:9', previewClass: 'h-3 w-8' },
]

const history = ref<HistoryEntry[]>([])
const historyLoading = ref(true)
let historyRevision = 0

const apiKeyOptions = computed<SelectOption[]>(() => allowedImageKeys.value.map((key) => ({
  value: key.id,
  label: `${key.name} · ${key.group?.name || key.group?.platform || t('common.unknown')}`,
})))
const selectedKey = computed(() => allowedImageKeys.value.find((key) => key.id === selectedKeyId.value) || null)
const selectedKeyDescription = computed(() => {
  const key = selectedKey.value
  return key ? `${key.group?.platform || t('common.unknown')} · ${key.group?.name || t('common.unknown')}` : ''
})
const modelOptions = computed<SelectOption[]>(() => availableModels.value.map((model) => ({ value: model, label: model })))
const qualityOptions: SelectOption[] = [
  { label: 'Auto', value: 'auto' }, { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' }, { label: 'High', value: 'high' },
]
const responseFormatOptions: SelectOption[] = [
  { label: 'Base64', value: 'b64_json' }, { label: 'URL', value: 'url' },
]
const modelHint = computed(() => {
  if (modelsError.value) return modelsError.value
  if (modelsLoading.value) return t('imageGeneration.hints.modelsLoading')
  if (selectedKey.value && availableModels.value.length === 0) return t('imageGeneration.hints.modelsEmpty')
  return ''
})
const sizeLabel = computed(() => `${resolution.value} · ${aspectRatio.value}`)
const draftOutputSize = computed(() => calculateOutputSize(draftResolution.value, draftAspectRatio.value))
const generateDisabled = computed(() => (
  generating.value || accessLoading.value || modelsLoading.value || !selectedKey.value ||
  !selectedModel.value || !prompt.value.trim()
))

function calculateOutputSize(selectedResolution: string, selectedRatio: string): string {
  const base = ({ '1K': 1024, '2K': 2048, '4K': 4096 } as Record<string, number>)[selectedResolution] || 2048
  const [widthRatio, heightRatio] = selectedRatio.split(':').map(Number)
  if (!widthRatio || !heightRatio) return `${base}x${base}`
  return widthRatio >= heightRatio
    ? `${base}x${Math.round(base * heightRatio / widthRatio)}`
    : `${Math.round(base * widthRatio / heightRatio)}x${base}`
}

function openSizeDialog() {
  draftResolution.value = resolution.value
  draftAspectRatio.value = aspectRatio.value
  sizeDialogOpen.value = true
}

function closeSizeDialog() {
  sizeDialogOpen.value = false
}

function applySize() {
  resolution.value = draftResolution.value
  aspectRatio.value = draftAspectRatio.value
  imageSize.value = draftOutputSize.value
  closeSizeDialog()
}

async function loadModelsForSelectedKey() {
  modelsController?.abort()
  const key = selectedKey.value
  availableModels.value = []
  selectedModel.value = null
  modelsError.value = ''
  if (!key) return

  const controller = new AbortController()
  const revision = ++modelsRevision
  modelsController = controller
  modelsLoading.value = true
  try {
    const models = await listAccessibleImageModels(key.key, { signal: controller.signal })
    if (controller.signal.aborted || revision !== modelsRevision) return
    availableModels.value = models
    selectedModel.value = models[0] || null
  } catch (error) {
    if (controller.signal.aborted || revision !== modelsRevision) return
    modelsError.value = extractApiErrorMessage(error, t('imageGeneration.messages.loadModelsFailed'))
    appStore.showError(modelsError.value)
  } finally {
    if (revision === modelsRevision) {
      modelsLoading.value = false
      modelsController = null
    }
  }
}

async function refreshKeys() {
  try {
    await refreshImageGenerationAccess(true)
    if (selectedKeyId.value && !allowedImageKeys.value.some((key) => key.id === selectedKeyId.value)) {
      selectedKeyId.value = allowedImageKeys.value[0]?.id || null
    } else {
      await loadModelsForSelectedKey()
    }
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('imageGeneration.messages.loadKeysFailed')))
  }
}

function chooseReferenceImages() {
  referenceInput.value?.click()
}

function fileIdentity(file: File) {
  return `${file.name}-${file.size}-${file.lastModified}`
}

function addReferenceImages(files: FileList | File[]) {
  const next = [...referenceImages.value]
  const existing = new Set(next.map((image) => image.id))
  const acceptedTypes = new Set(['image/png', 'image/jpeg', 'image/webp'])
  referenceError.value = ''
  for (const file of Array.from(files)) {
    if (next.length >= 4) {
      referenceError.value = t('imageGeneration.messages.referenceImagesLimit')
      break
    }
    if (!acceptedTypes.has(file.type.toLowerCase())) {
      referenceError.value = t('imageGeneration.messages.referenceImageType')
      continue
    }
    if (file.size > 20 * 1024 * 1024) {
      referenceError.value = t('imageGeneration.messages.referenceImageTooLarge')
      continue
    }
    const id = fileIdentity(file)
    if (!existing.has(id)) {
      next.push({ id, file, previewUrl: URL.createObjectURL(file) })
      existing.add(id)
    }
  }
  referenceImages.value = next
  dragging.value = false
}

function onReferenceInput(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files) addReferenceImages(input.files)
  input.value = ''
}

function onReferenceDrop(event: DragEvent) {
  if (event.dataTransfer?.files) addReferenceImages(event.dataTransfer.files)
}

function removeReferenceImage(id: string) {
  const image = referenceImages.value.find((candidate) => candidate.id === id)
  if (image) URL.revokeObjectURL(image.previewUrl)
  referenceImages.value = referenceImages.value.filter((candidate) => candidate.id !== id)
  referenceError.value = ''
}

function clearReferenceImages() {
  referenceImages.value.forEach((image) => URL.revokeObjectURL(image.previewUrl))
  referenceImages.value = []
  referenceError.value = ''
}

function imageMimeType(image: ImageGenerationData): string {
  const explicit = String(image.mime_type || '').trim()
  if (explicit) return explicit
  const format = String(image.output_format || '').trim().toLowerCase()
  if (format === 'webp') return 'image/webp'
  if (format === 'jpeg' || format === 'jpg') return 'image/jpeg'
  return 'image/png'
}

function imageSource(image: ImageGenerationData): string {
  const base64 = String(image.b64_json || '').trim()
  return base64 ? `data:${imageMimeType(image)};base64,${base64}` : String(image.url || '').trim()
}

function downloadName(index: number, mimeType: string) {
  const extension = mimeType === 'image/webp' ? 'webp' : mimeType === 'image/jpeg' ? 'jpg' : 'png'
  return `online-image-${Date.now()}-${index + 1}.${extension}`
}

function requestedCount() {
  const parsed = Number.parseInt(count.value, 10)
  return Number.isFinite(parsed) ? Math.min(Math.max(parsed, 1), 4) : 1
}

async function submitGeneration() {
  const key = selectedKey.value
  if (!key) return appStore.showError(t('imageGeneration.messages.chooseKey'))
  if (!selectedModel.value) return appStore.showError(t('imageGeneration.messages.chooseModel'))
  if (!prompt.value.trim()) return appStore.showError(t('imageGeneration.messages.choosePrompt'))

  generating.value = true
  try {
    const response = await generateImage(key.key, {
      model: selectedModel.value,
      prompt: prompt.value.trim(),
      n: requestedCount(),
      size: imageSize.value,
      quality: String(quality.value || ''),
      response_format: String(responseFormat.value || ''),
      referenceImages: referenceImages.value.map((image) => image.file),
    })
    const images = (response.data || []).flatMap((image, index) => {
      const src = imageSource(image)
      if (!src) return []
      const revisedPrompt = String(image.revised_prompt || '').trim()
      const mimeType = imageMimeType(image)
      return [{
        id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
        src,
        prompt: revisedPrompt || prompt.value.trim(),
        revisedPrompt,
        mimeType,
        downloadName: downloadName(index, mimeType),
      }]
    })
    results.value = images
    resultModel.value = response.model || selectedModel.value
    resultHint.value = images.length > 0 ? `${images.length} × ${resultModel.value}` : t('imageGeneration.messages.noImages')
    if (images.length === 0) return appStore.showInfo(t('imageGeneration.messages.noImages'))

    const entry: HistoryEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      createdAt: Date.now(), model: resultModel.value, prompt: prompt.value.trim(),
      sizeLabel: sizeLabel.value, imageSize: imageSize.value, images,
    }
    try {
      const userId = authStore.user?.id
      if (!userId) throw new Error('Authenticated User is required for image history')
      history.value = await saveImageGenerationHistoryEntry(userId, entry)
    } catch (error) {
      appStore.showInfo(extractApiErrorMessage(error, t('imageGeneration.messages.historySaveFailed')))
    }
    appStore.showSuccess(t('imageGeneration.messages.generated'))
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('imageGeneration.messages.generateFailed')))
  } finally {
    generating.value = false
  }
}

async function downloadImage(image: PreviewImage) {
  try {
    if (image.src.startsWith('data:')) {
      const anchor = document.createElement('a')
      anchor.href = image.src
      anchor.download = image.downloadName
      document.body.append(anchor)
      anchor.click()
      anchor.remove()
      return
    }
    const response = await fetch(image.src)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const objectUrl = URL.createObjectURL(await response.blob())
    const anchor = document.createElement('a')
    anchor.href = objectUrl
    anchor.download = image.downloadName
    document.body.append(anchor)
    anchor.click()
    anchor.remove()
    URL.revokeObjectURL(objectUrl)
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('imageGeneration.messages.downloadFailed')))
  }
}

function openImage(image: PreviewImage) {
  window.open(image.src, '_blank', 'noopener,noreferrer')
}

function formatHistoryDate(timestamp: number) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(timestamp))
}

async function loadHistory() {
  const revision = ++historyRevision
  const userId = authStore.user?.id
  try {
    const entries = userId ? await readImageGenerationHistory(userId) : []
    if (revision === historyRevision && userId === authStore.user?.id) history.value = entries
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('imageGeneration.messages.historyLoadFailed')))
  } finally {
    if (revision === historyRevision) historyLoading.value = false
  }
}

async function clearHistory() {
  if (!window.confirm(t('imageGeneration.history.clearConfirm'))) return
  try {
    const userId = authStore.user?.id
    if (!userId) return
    await clearImageGenerationHistory(userId)
    history.value = []
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('imageGeneration.messages.historyClearFailed')))
  }
}

watch(allowedImageKeys, (keys) => {
  if (keys.length === 0) selectedKeyId.value = null
  else if (!keys.some((key) => key.id === selectedKeyId.value)) selectedKeyId.value = keys[0].id
}, { immediate: true })
watch(selectedKeyId, () => { void loadModelsForSelectedKey() }, { immediate: true })
watch(() => authStore.user?.id, () => {
  history.value = []
  historyLoading.value = true
  void loadHistory()
})

onMounted(() => {
  void refreshImageGenerationAccess()
  void loadHistory()
  if (authStore.isAdmin) void adminSettingsStore.fetch()
})

onBeforeUnmount(() => {
  historyRevision += 1
  modelsRevision += 1
  modelsController?.abort()
  clearReferenceImages()
})
</script>

<style scoped>
.online-image-layout {
  display: grid;
  gap: 1.5rem;
}

.api-key-control-row {
  display: grid;
  gap: 0.5rem;
}

.api-key-refresh { width: 100%; }

.online-image-control {
  min-height: 44px;
  padding: 0.625rem 1rem;
  border-radius: 8px;
  box-shadow: none;
}

.online-image-module :deep(.select-trigger) {
  min-height: 44px;
  border-radius: 8px;
  box-shadow: none;
}

.online-image-module .btn[data-online-image-action] {
  min-height: 44px;
  border-radius: 8px;
  box-shadow: none;
}

.online-image-module .btn[data-online-image-action][aria-pressed='true'] {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

@media (min-width: 1280px) {
  .online-image-layout { grid-template-columns: minmax(0, 360px) minmax(0, 1fr); }
}

@media (min-width: 640px) {
  .api-key-control-row {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
  }

  .api-key-refresh {
    width: auto;
    white-space: nowrap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .online-image-control,
  .online-image-module .btn[data-online-image-action] { transition-duration: 1ms; }
}
</style>
