<template>
  <div class="min-h-screen flex items-start justify-center pt-12 px-4">
    <div class="max-w-sm w-full">
      <div class="mb-4 font-medium bg-white text-slate-800 p-2 rounded-md text-center">
        {{
          winner
            ? winner === "draw"
              ? "Draw"
              : `Winner: ${winner}`
            : `Turn: ${current}`
        }}
      </div>

      <div
        role="grid"
        aria-label="Tic Tac Toe board"
        class="grid grid-cols-3 gap-4"
      >
        <Square
          v-for="(cell, i) in board"
          :key="i"
          :index="i"
          :value="cell"
          :size="'md'"
          :highlight="Boolean(winningLine && winningLine.includes(i))"
          @select="onSelect"
        />
      </div>

      <div class="mt-5">
        <button
          @click="reset"
          class="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white hover:cursor-pointer hover:from-green-500 hover:to-blue-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Square from "~/components/Square.vue";
import { useGame } from "~/composables/useGame";

const { board, current, winner, winningLine, play, reset } = useGame();

function onSelect(index: number) {
  play(index);
}
</script>
