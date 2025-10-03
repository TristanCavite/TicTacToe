export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[]; 

export const createEmptyBoard = (): Board => Array(9).fill(null);

export function makeMove(board: Board, index: number, player: Player): Board {
  if (index < 0 || index > 8) throw new Error('Index out of bounds');
  if (board[index] !== null) throw new Error('Invalid move: cell occupied');
  const copy = board.slice();
  copy[index] = player;
  return copy;
}

const WIN_LINES: [number, number, number][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export function checkWinner(board: Board): { winner: Player | null; line?: number[] } {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    // explicit null-checks (safer & clearer)
    if (board[a] !== null && board[b] !== null && board[c] !== null &&
        board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, line };
    }
  }
  return { winner: null };
}

export function isDraw(board: Board): boolean {
  return board.every(cell => cell !== null) && checkWinner(board).winner === null;
}

export function availableMoves(board: Board): number[] {
  const moves: number[] = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) moves.push(i);
  }
  return moves;
}
