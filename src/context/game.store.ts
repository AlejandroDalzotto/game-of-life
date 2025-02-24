import { create } from "zustand"
import { createEmptyGrid } from "@/lib/utils"

type State = {
  grid: boolean[][]
  isRunning: boolean
}

type Actions = {
  markCell: (row: number, col: number, value: boolean) => void
  toggleIsRunning: VoidFunction
  resetGrid: VoidFunction
  updateGrid: VoidFunction
}

export const useGameStore = create<State & Actions>()((set, get) => ({
  grid: createEmptyGrid(),
  isRunning: false,
  toggleIsRunning: () => set((prev) => ({ isRunning: !prev.isRunning })),
  markCell: (row, col, value) => {

    const isRunning = get().isRunning

    if (!isRunning) {
      const nextGrid = [...get().grid]
      nextGrid[row][col] = value

      set(() => ({ grid: nextGrid }))
    }
  },
  resetGrid: () => set(() => ({ grid: createEmptyGrid(), isRunning: false })),
  updateGrid: () => {

    const currentGrid = [...get().grid]

    if (currentGrid.flat().every(c => !c)) {
      set(() => ({ isRunning: false }))
      return
    }

    const newGrid: boolean[][] = currentGrid.map((row, i) => {

      return row.map((cell, j) => {
        const topPositionCells: boolean[] = []
        const sideCells: boolean[] = []
        const bottomPositionCells: boolean[] = []

        if (currentGrid[i - 1]) {
          if (j === 0) topPositionCells.push(...currentGrid[i - 1].slice(j, j + 2))
          if (j > 0 && j + 1 < row.length) topPositionCells.push(...currentGrid[i - 1].slice(j - 1, j + 2))
          if (j + 1 === row.length) topPositionCells.push(...currentGrid[i - 1].slice(j - 1, j + 1))
        }

        if (currentGrid[i + 1]) {
          if (j === 0) bottomPositionCells.push(...currentGrid[i + 1].slice(j, j + 2))
          if (j > 0 && j + 1 < row.length) bottomPositionCells.push(...currentGrid[i + 1].slice(j - 1, j + 2))
          if (j + 1 === row.length) bottomPositionCells.push(...currentGrid[i + 1].slice(j - 1, j + 1))
        }

        if (currentGrid[i][j - 1] !== undefined) sideCells.push(currentGrid[i][j - 1])
        if (currentGrid[i][j + 1] !== undefined) sideCells.push(currentGrid[i][j + 1])

        const totalCellsAlive = [
          topPositionCells,
          sideCells,
          bottomPositionCells
        ].flat().filter(c => c).length

        if (cell && (totalCellsAlive > 3 || totalCellsAlive < 2)) {
          return false
        }
        if (cell && (totalCellsAlive === 3 || totalCellsAlive === 2)) {
          return true
        }

        if (!cell && totalCellsAlive === 3) {
          return true
        }

        return false

      })

    })

    set(() => ({ grid: newGrid }))
  }
}))