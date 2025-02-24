# Conway's Game of Life

This is a recreation of **John Conway's Game of Life**, implemented using **Next.js** and bundled with **Bun**. The Game of Life is a cellular automaton where cells on a grid live, die, or multiply based on simple rules. It was invented by John Conway in 1970 and has fascinated mathematicians and computer scientists ever since.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)

## About

The Game of Life is a zero-player game, meaning that its evolution is dictated by its initial state, with no further input from humans. The game consists of a grid of cells that evolve based on the following rules:

1. **Any live cell with two or three live neighbors survives.**
2. **Any dead cell with exactly three live neighbors becomes a live cell.**
3. **All other live cells die in the next generation. Similarly, all other dead cells stay dead.**

This project is built with the goal of providing an interactive visualization of the Game of Life using a web-based interface.

## Features

- Visualize the grid of cells, where you can add, remove, and play the game.
- Start, stop, and reset the simulation.

## Technologies

- **Next.js**: A React-based framework for building server-side rendered and statically generated applications.
- **Bun**: A modern JavaScript bundler that helps improve development and build performance.
- **Tailwind CSS**: For styling the app with utility-first classes.

## Getting Started

To get this project up and running on your local machine, follow the steps below:

### Prerequisites

Make sure you have the following installed:
- **Bun** (https://bun.sh/)
- **Node.js** (for running the app if Bun isn't installed, though Bun is recommended for this app)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/game-of-life-nextjs.git
cd game-of-life-nextjs
```

2. Install dependencies using Bun:

```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open the app in your browser:

Navigate to http://localhost:3000 to see the Game of Life in action.

## How to Use
Once the app is running:

- Click on cells to toggle them between alive (white) and dead (black).
- Start the simulation by clicking the “Start” button.
- Pause the simulation by clicking the “Pause” button.
- Reset the grid by clicking the “Reset” button.