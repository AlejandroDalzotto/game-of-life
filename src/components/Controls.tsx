import { Play } from "./buttons/Play"
import { Reset } from "./buttons/Reset"

export const Controls = () => {
  return (
    <header className="flex items-center gap-x-4">
      <Play />
      <Reset />
    </header>
  )
}
