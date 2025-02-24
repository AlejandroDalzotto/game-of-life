"use client"

import clsx from "clsx"
import { CELL_SIZE } from "@/lib/constants"
import { useGameStore } from "@/context/game.store"
import { useEffect } from "react"

export const GameOfLife = () => {

  const grid = useGameStore(state => state.grid)
  const isRunning = useGameStore(state => state.isRunning)
  const markCell = useGameStore(state => state.markCell)
  const updateGrid = useGameStore(state => state.updateGrid)

  useEffect(() => {
    if (isRunning) {
      const timeout = setInterval(() => {
        updateGrid()
      }, 100)

      return () => clearInterval(timeout)
    }

  }, [updateGrid, isRunning])


  return (
    <div className="grid w-full h-full place-content-center">
      <div className="flex flex-col">
        {
          grid.map((row, i) => {

            return (
              <div className="flex" key={i}>
                {
                  row.map((cell, j) => {

                    return (
                      <div
                        onClick={() => {
                          markCell(i, j, !cell)
                        }}
                        key={j.toString().concat(i.toString())}
                        style={{
                          width: `${CELL_SIZE}px`,
                          height: `${CELL_SIZE}px`,
                        }}
                        className={clsx(
                          "transition-transform border rounded-sm border-neutral-900 hover:cursor-pointer hover:bg-white/5 hover:scale-125",
                          { "bg-white": cell }
                        )}
                      />
                    )

                  })
                }
              </div>
            )

          })
        }
      </div>
    </div>
  )
}
