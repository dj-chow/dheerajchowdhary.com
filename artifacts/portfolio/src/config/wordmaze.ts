/**
 * Hero word maze configuration.
 * A crossword-style grid where words intersect at shared letters.
 *
 * Grid coordinates (row, col) are 0-indexed.
 * Direction: "h" = horizontal (left-to-right), "v" = vertical (top-to-bottom).
 * highlight: true applies the primary gradient (used for the anchor word).
 *
 * Grid dimensions: 9 rows × 13 cols
 *
 * Intersections (8 total):
 *   ROADMAP(A) × PLATFORM(A)     at (2,5)
 *   ENTERPRISE(T) × PLATFORM(T)  at (3,5)
 *   ENTERPRISE(R) × STRATEGY(R)  at (3,7)
 *   ENTERPRISE(S) × RISK(S)      at (3,11)
 *   DATA(A) × STRATEGY(A)        at (4,7)
 *   ADOPTION(O) × PLATFORM(O)    at (5,5)
 *   ADOPTION(T) × STRATEGY(T)    at (5,7)
 *   GROWTH(G) × STRATEGY(G)      at (7,7)
 */

export interface MazeWord {
  word: string;
  row: number;
  col: number;
  direction: "h" | "v";
  highlight?: boolean;
}

export const mazeWords: MazeWord[] = [
  // Horizontal words
  { word: "ROADMAP",    row: 2, col: 0,  direction: "h" },
  { word: "ENTERPRISE", row: 3, col: 3,  direction: "h" },
  { word: "DATA",       row: 4, col: 6,  direction: "h" },
  { word: "ADOPTION",   row: 5, col: 3,  direction: "h", highlight: true },
  { word: "GROWTH",     row: 7, col: 7,  direction: "h" },

  // Vertical words
  { word: "PLATFORM",   row: 0, col: 5,  direction: "v" },
  { word: "STRATEGY",   row: 1, col: 7,  direction: "v" },
  { word: "RISK",       row: 1, col: 11, direction: "v" },
];

export const MAZE_ROWS = 9;
export const MAZE_COLS = 13;
