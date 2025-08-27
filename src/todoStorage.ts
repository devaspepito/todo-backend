import type { Todo } from "./types";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const TODOS_PATH = join(__dirname, "..", "todos.json");

export function loadTodos(): Todo[] {
  if (!existsSync(TODOS_PATH)) return [];
  const data = readFileSync(TODOS_PATH, "utf-8");
  try {
    return JSON.parse(data) as Todo[];
  } catch {
    return [];
  }
}

export function saveTodos(todos: Todo[]): void {
  writeFileSync(TODOS_PATH, JSON.stringify(todos, null, 2), "utf-8");
}