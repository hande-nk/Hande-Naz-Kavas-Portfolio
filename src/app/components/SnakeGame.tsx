"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right";

const CELL_SIZE = 16;
const GRID_SIZE = 24; // 24x24 grid
const CANVAS_SIZE = CELL_SIZE * GRID_SIZE;
const TICK_MS = 120;

type Cell = { x: number; y: number };

function getRandomCell(exclude: Cell[]): Cell {
  while (true) {
    const x = Math.floor(Math.random() * GRID_SIZE); //where the snake starts in x direction
    const y = Math.floor(Math.random() * GRID_SIZE); //where the snake starts in y direction
    const conflict = exclude.some((c) => c.x === x && c.y === y);
    if (!conflict) return { x, y };
  }
}

export function SnakeGameModal({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [snake, setSnake] = useState<Cell[]>([
    { x: 10, y: 12 },
    { x: 9, y: 12 },
    { x: 8, y: 12 },
  ]);
  const [direction, setDirection] = useState<Direction>("right");
  const [food, setFood] = useState<Cell>({ x: 15, y: 12 });
  const [running, setRunning] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (gameOver) {
        if (e.key === " ") {
          // restart
          setSnake([
            { x: 10, y: 12 },
            { x: 9, y: 12 },
            { x: 8, y: 12 },
          ]);
          setDirection("right");
          setFood({ x: 15, y: 12 });
          setScore(0);
          setGameOver(false);
          setRunning(true);
        }
        return;
      }
      if (e.key === "ArrowUp" && direction !== "down") setDirection("up");
      if (e.key === "ArrowDown" && direction !== "up") setDirection("down");
      if (e.key === "ArrowLeft" && direction !== "right") setDirection("left");
      if (e.key === "ArrowRight" && direction !== "left") setDirection("right");
      if (e.key === " ") setRunning((prev) => !prev);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction, gameOver, onClose]);

  const step = useCallback(() => {
    setSnake((prevSnake) => {
      if (!running || gameOver) return prevSnake;

      const head = prevSnake[0];
      let newHead: Cell = head;

      if (direction === "up") newHead = { x: head.x, y: head.y - 1 };
      if (direction === "down") newHead = { x: head.x, y: head.y + 1 };
      if (direction === "left") newHead = { x: head.x - 1, y: head.y };
      if (direction === "right") newHead = { x: head.x + 1, y: head.y };

      // Wall collision
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        setRunning(false);
        return prevSnake;
      }

      // Self collision
      if (prevSnake.some((c) => c.x === newHead.x && c.y === newHead.y)) {
        setGameOver(true);
        setRunning(false);
        return prevSnake;
      }

      let newSnake: Cell[];

      // Eat food
      if (newHead.x === food.x && newHead.y === food.y) {
        newSnake = [newHead, ...prevSnake];
        setScore((s) => s + 1);
        setFood(getRandomCell(newSnake));
      } else {
        newSnake = [newHead, ...prevSnake.slice(0, -1)];
      }

      return newSnake;
    });
  }, [direction, food, gameOver, running]);

  // Game loop
  useEffect(() => {
    if (!running || gameOver) return;

    const id = setInterval(() => {
      step();
    }, TICK_MS);

    return () => clearInterval(id);
  }, [running, gameOver, step]);

  // Draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.strokeStyle = "#222222";
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE + 0.5, 0);
      ctx.lineTo(i * CELL_SIZE + 0.5, CANVAS_SIZE);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE + 0.5);
      ctx.lineTo(CANVAS_SIZE, i * CELL_SIZE + 0.5);
      ctx.stroke();
    }

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(
      food.x * CELL_SIZE + 2,
      food.y * CELL_SIZE + 2,
      CELL_SIZE - 4,
      CELL_SIZE - 4
    );

    ctx.fillStyle = "#ffffff";
    snake.forEach((cell, index) => {
      const r = index === 0 ? 2 : 4;
      ctx.fillRect(
        cell.x * CELL_SIZE + r,
        cell.y * CELL_SIZE + r,
        CELL_SIZE - 2 * r,
        CELL_SIZE - 2 * r
      );
    });
  }, [snake, food]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-md rounded-2xl border border-white/40 bg-black px-4 py-4 shadow-2xl">
        <div className="mb-2 flex items-center justify-between text-xs text-white">
          <span>Snake · Arrow keys to move · Space to pause</span>
          <button
            onClick={onClose}
            className="rounded px-2 py-1 text-xs hover:bg-white hover:text-black transition"
          >
            ✕
          </button>
        </div>

        <div className="mb-2 flex justify-between text-xs text-white">
          <span>Score: {score}</span>
          {gameOver && <span className="uppercase">Game over · press space</span>}
        </div>

        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="border border-white"
          />
        </div>
      </div>
    </div>
  );
}

// SnakeGame.tsx (launcher part)

export default function SnakeGameLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-gray-500 px-4 py-2 text-xs text-gray-100 hover:bg-white hover:text-black transition"
      >
        Play Snake
      </button>

      {/* Only render the modal when open = true */}
      {open && <SnakeGameModal onClose={() => setOpen(false)} />}
    </>
  );
}
