<template>
  <button
    type="button"
    :class="[
      'flex items-center justify-center border-2 rounded-md select-none transition duration-150 hover:cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2',
      highlight ? 'bg-yellow-400/80 border-yellow-500 text-slate-900' : 'bg-slate-800 border-slate-700 text-white',
      sizeClass
    ]"
    :aria-label="`Square ${index}`"
    :disabled="!!value"
    @click="onClick"
  >
    <span class="leading-none">{{ value ?? '' }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps<{
  index: number
  value: string | null
  highlight?: boolean
  size?: 'sm' | 'md' | 'lg' 
}>()

const emit = defineEmits<{ (e: 'select', index: number): void }>()

function onClick() {
  if (props.value !== null) return
  emit('select', props.index)
}


const sizeClass = computed(() => {
  if (props.size === 'sm') return 'w-12 h-12 text-2xl sm:w-12 sm:h-12'
  if (props.size === 'lg') return 'w-20 h-20 text-4xl sm:w-20 sm:h-20'

  return 'w-12 h-12 text-2xl sm:w-16 sm:h-16 sm:text-3xl md:w-20 md:h-20 md:text-4xl'
})
</script>
