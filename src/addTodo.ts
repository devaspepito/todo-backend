import type { Request, Response } from "express";
import { readTodos, writeTodos } from "./todoStorage";
import type { Todo } from "./types";

export const addTodo = (req: Request, res: Response) => {
  const todos = readTodos();
  const newTodo: Todo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
};