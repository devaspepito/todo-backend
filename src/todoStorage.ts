import fs from "fs";
import path from "path";
import type { Todo } from "./types";

const todosFile = path.join(__dirname, "../todos.json");

export const readTodos = (): Todo[] => {
  if (!fs.existsSync(todosFile)) fs.writeFileSync(todosFile, "[]");
  return JSON.parse(fs.readFileSync(todosFile, "utf-8"));
};

export const writeTodos = (todos: Todo[]) => {
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
};