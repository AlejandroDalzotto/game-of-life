import { Controls } from "@/components/Controls";
import { GameOfLife } from "@/components/GameOfLife";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen p-10">
      <Controls />
      <GameOfLife />
      <footer>
        <p className="text-neutral-200">Click to toggle cells when paused.</p>
      </footer>
    </main>
  );
}
