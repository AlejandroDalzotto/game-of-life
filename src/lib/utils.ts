import { GRID_SIZE } from "./constants";

export const createEmptyGrid = (): boolean[][] => {
  return Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(false))
}