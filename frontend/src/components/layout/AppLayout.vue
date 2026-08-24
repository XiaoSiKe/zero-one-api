<template>
  <div class="app-shell console-skin-shell min-h-screen">
    <!-- Sidebar -->
    <AppSidebar />

    <!-- Main Content Area -->
    <div
      class="relative min-h-screen transition-[margin] duration-200"
      :class="[sidebarCollapsed ? 'lg:ml-[72px]' : 'lg:ml-64']"
    >
      <!-- Header -->
      <AppHeader />

      <!-- Main Content -->
      <main
        class="console-route-content console-card-motion-surface p-4 md:p-6 lg:p-8"
        data-zero-one-card-motion="true"
        @pointermove.passive="trackConsoleCardMotion"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/styles/onboarding.css'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useAppStore } from '@/stores'
import { useAuthStore } from '@/stores/auth'
import { useOnboardingTour } from '@/composables/useOnboardingTour'
import { useOnboardingStore } from '@/stores/onboarding'
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'

const appStore = useAppStore()
const authStore = useAuthStore()
const sidebarCollapsed = computed(() => appStore.sidebarCollapsed)
const isAdmin = computed(() => authStore.user?.role === 'admin')

const { replayTour } = useOnboardingTour({
  storageKey: isAdmin.value ? 'admin_guide' : 'user_guide',
  autoStart: true
})

const onboardingStore = useOnboardingStore()

const reducedMotionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)')
const nestedMotionHostSelector = '.card, iframe'
let cardMotionFrame: number | null = null
let activeMotionCard: HTMLElement | null = null
let activePointer: { x: number; y: number } | null = null

function updateConsoleCardAngle() {
  cardMotionFrame = null
  if (!activeMotionCard || !activePointer) return

  const rect = activeMotionCard.getBoundingClientRect()
  const angle =
    Math.atan2(
      activePointer.y - (rect.top + rect.height / 2),
      activePointer.x - (rect.left + rect.width / 2)
    ) *
      (180 / Math.PI) +
    120
  activeMotionCard.style.setProperty('--console-card-angle', `${angle}deg`)
}

function trackConsoleCardMotion(event: PointerEvent) {
  if (
    (event.pointerType !== 'mouse' && event.pointerType !== 'pen') ||
    reducedMotionQuery?.matches
  ) {
    return
  }

  const surface = event.currentTarget
  const eventTarget = event.target
  if (!(surface instanceof HTMLElement) || !(eventTarget instanceof Element)) return

  const card = eventTarget.closest('.card')
  if (
    !(card instanceof HTMLElement) ||
    !surface.contains(card) ||
    card.matches('.console-card-motion-static, .sticky') ||
    card.querySelector(nestedMotionHostSelector)
  ) {
    return
  }

  activeMotionCard = card
  activePointer = { x: event.clientX, y: event.clientY }
  if (cardMotionFrame !== null) return
  cardMotionFrame = window.requestAnimationFrame(updateConsoleCardAngle)
}

onMounted(() => {
  onboardingStore.setReplayCallback(replayTour)
})

onBeforeUnmount(() => {
  if (cardMotionFrame !== null) window.cancelAnimationFrame(cardMotionFrame)
  cardMotionFrame = null
  activeMotionCard = null
  activePointer = null
})

defineExpose({ replayTour })
</script>
