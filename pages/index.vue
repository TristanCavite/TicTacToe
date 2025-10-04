<template>
  <main class="p-8 bg-slate-900 min-h-screen flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4 text-white">Tic Tac Toe</h1>
    <Board />
  </main>
</template>

<script setup lang="ts">
import Board from '~/components/Board.vue'
</script>
