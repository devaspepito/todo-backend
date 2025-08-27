import type { Request, Response } from "express";
import { readTodos, writeTodos } from "./todoStorage";

export const updateTodo = (req: Request, res: Response) => {
  const todos = readTodos();
  const id = parseInt(req.params.id ?? "");
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) return res.status(404).json({ message: "Not found" });

  todos[index] = { ...todos[index], ...req.body };
  writeTodos(todos);
  res.json(todos[index]);
};