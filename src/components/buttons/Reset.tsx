"use client"
import { useGameStore } from "@/context/game.store"

export const Reset = () => {

  const resetGrid = useGameStore(state => state.resetGrid)

  return (
    <button
      onClick={() => resetGrid()}
      className="active:scale-95 py-2 px-4 font-bold text-2xl capitalize hover:scale-110 transition-all border-2 rounded-lg border-neutral-300 hover:border-neutral-50 *:fill-neutral-300 *:transition-colors *:hover:fill-neutral-50"
    >
      reset
    </button>
  )
}
