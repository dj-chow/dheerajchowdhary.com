import { motion } from "framer-motion";
import { mazeWords, MAZE_ROWS, MAZE_COLS, type MazeWord } from "@/config/wordmaze";

interface Cell {
  letter: string;
  words: MazeWord[];
  isIntersection: boolean;
  isHighlight: boolean;
}

function buildGrid(): Cell[][] {
  const grid: Cell[][] = Array.from({ length: MAZE_ROWS }, () =>
    Array.from({ length: MAZE_COLS }, () => ({
      letter: "",
      words: [],
      isIntersection: false,
      isHighlight: false,
    }))
  );

  for (const mw of mazeWords) {
    const letters = mw.word.split("");
    letters.forEach((ch, i) => {
      const r = mw.direction === "h" ? mw.row : mw.row + i;
      const c = mw.direction === "h" ? mw.col + i : mw.col;
      const cell = grid[r][c];

      if (cell.letter && cell.letter !== ch) {
        console.warn(`Maze conflict at (${r},${c}): "${cell.letter}" vs "${ch}"`);
      }

      cell.letter = ch;
      cell.words.push(mw);
      if (cell.words.length > 1) cell.isIntersection = true;
      if (mw.highlight) cell.isHighlight = true;
    });
  }

  return grid;
}

const grid = buildGrid();

export function WordMaze() {
  return (
    <div
      className="inline-grid gap-0"
      style={{
        gridTemplateColumns: `repeat(${MAZE_COLS}, 1fr)`,
        gridTemplateRows: `repeat(${MAZE_ROWS}, 1fr)`,
      }}
      aria-label="Word maze showing key skills: Adoption, Platform, Strategy, Enterprise, Risk, Data, Roadmap, Growth"
      role="img"
    >
      {grid.flatMap((row, r) =>
        row.map((cell, c) => (
          <motion.span
            key={`${r}-${c}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: cell.letter ? 1 : 0 }}
            transition={{ delay: 0.03 * (r + c), duration: 0.4 }}
            className={`
              flex items-center justify-center
              w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9
              text-xs sm:text-sm md:text-base font-mono font-bold
              select-none
              ${cell.letter ? "" : "pointer-events-none"}
              ${cell.isHighlight
                ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400"
                : cell.isIntersection
                  ? "text-foreground"
                  : cell.letter
                    ? "text-muted-foreground/60"
                    : ""
              }
            `}
          >
            {cell.letter}
          </motion.span>
        ))
      )}
    </div>
  );
}
