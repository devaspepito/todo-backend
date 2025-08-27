import type { Request, Response } from "express";
import { saveTodos, loadTodos } from "./todoStorage";
import type { Todo } from "./types";

export const addTodo = (req: Request, res: Response) => {
  const todos = loadTodos();
  const { title, description } = req.body as { title: string; description?: string };
  if (!title) return res.status(400).send("Missing title");

  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
    description: description || "",
  };
  todos.push(newTodo);
  saveTodos(todos);
  return res.json(newTodo);
}