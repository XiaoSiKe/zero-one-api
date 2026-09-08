<template>
  <div class="card p-4">
    <h3 class="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
      {{ t('admin.dashboard.consumptionTrend') }}
    </h3>
    <div v-if="loading" class="flex h-48 items-center justify-center">
      <LoadingSpinner />
    </div>
    <div v-else-if="chartData" class="h-48">
      <Line :data="chartData" :options="lineOptions" />
    </div>
    <div v-else class="flex h-48 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
      {{ t('admin.dashboard.noDataAvailable') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js'
import { Line } from 'vue-chartjs'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import type { TrendDataPoint } from '@/types'
import { formatDashboardTrendLabel } from '@/utils/dashboardTrend'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

const { t } = useI18n()
const props = defineProps<{ trendData: TrendDataPoint[]; loading?: boolean }>()
const isDark = computed(() => document.documentElement.classList.contains('dark'))
const textColor = computed(() => isDark.value ? '#e5e7eb' : '#374151')
const gridColor = computed(() => isDark.value ? '#374151' : '#e5e7eb')

const chartData = computed(() => props.trendData.length ? ({
  labels: props.trendData.map(point => formatDashboardTrendLabel(point.date)),
  datasets: [{
    label: t('admin.dashboard.actualConsumption'),
    data: props.trendData.map(point => point.actual_cost ?? 0),
    borderColor: '#2563eb',
    backgroundColor: '#2563eb20',
    fill: true,
    tension: 0.3,
  }],
}) : null)

const lineOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false as const,
  interaction: { intersect: false, mode: 'index' as const },
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { label: (context: any) => `${t('admin.dashboard.actualConsumption')}: $${Number(context.raw).toFixed(2)}` } },
  },
  scales: {
    x: { grid: { color: gridColor.value }, ticks: { color: textColor.value, font: { size: 10 } } },
    y: { beginAtZero: true, grid: { color: gridColor.value }, ticks: { color: textColor.value, callback: (value: string | number) => `$${Number(value).toFixed(2)}` } },
  },
}))
</script>
