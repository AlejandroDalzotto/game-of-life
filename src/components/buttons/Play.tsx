"use client"

import { useGameStore } from "@/context/game.store"

const pathPlay = "M358-276v-410l323 205-323 205Zm35-205Zm0 140 223-140-223-140v280Z"
const pathPause = "M548-238v-486h175v486H548Zm-311 0v-486h176v486H237Zm346-35h105v-416H583v416Zm-311 0h106v-416H272v416Zm0-416v416-416Zm311 0v416-416Z"

export const Play = () => {

  const isRunning = useGameStore(state => state.isRunning)
  const toggleIsRunning = useGameStore(state => state.toggleIsRunning)

  return (
    <button
      onClick={() => toggleIsRunning()}
      title={isRunning ? "pause game" : "start game"}
      className="active:scale-95 hover:scale-110 transition-all border-2 rounded-lg border-neutral-300 hover:border-neutral-50 *:fill-neutral-300 *:transition-colors *:hover:fill-neutral-50"
    >
      <svg height="48px" width="48px" viewBox="0 -960 960 960" strokeWidth={8} fill="#fff">
        <path d={!isRunning ? pathPlay : pathPause} />
      </svg>
    </button>
  )
}
