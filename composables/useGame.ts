import { ref } from 'vue'
import { createEmptyBoard, makeMove, checkWinner, availableMoves } from '~/lib/game'
import type { Board, Player } from '~/lib/game'

export function useGame() {
  const board = ref<Board>(createEmptyBoard())
  const current = ref<Player>('X')
  const winner = ref<Player | 'draw' | null>(null)
  const winningLine = ref<number[] | null>(null)

  function play(index: number) {
    if (winner.value || board.value[index] !== null) return false
    const next = makeMove(board.value, index, current.value)
    board.value = next

    const res = checkWinner(board.value)
    if (res.winner) {
      winner.value = res.winner
      winningLine.value = res.line ?? null
    } else if (board.value.every(c => c !== null)) {
      winner.value = 'draw'
      winningLine.value = null
    } else {
      current.value = current.value === 'X' ? 'O' : 'X'
    }
    return true
  }

  function reset() {
    board.value = createEmptyBoard()
    current.value = 'X'
    winner.value = null
    winningLine.value = null
  }

  return {
    board,
    current,
    winner,
    winningLine,
    play,
    reset,
    availableMoves: () => availableMoves(board.value)
  }
}
