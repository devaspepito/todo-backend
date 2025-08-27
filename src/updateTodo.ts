import type { Request, Response } from "express";
import type { Todo } from "./types";
import { saveTodos, loadTodos } from "./todoStorage";

export const updateTodo = (req: Request, res: Response) => {
  const todos = loadTodos();
  const id = Number(req.params.id);
  const { title, completed, description } = req.body as Partial<Todo>;
  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).send("Not found");

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  if (description !== undefined) todo.description = description;
  saveTodos(todos);
  return res.json(todo);
}