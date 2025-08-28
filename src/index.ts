import express from "express";
import cors from "cors";
import { getTodos } from "./getTodos";
import { addTodo } from "./addTodo";
import { updateTodo } from "./updateTodo";
import { deleteTodo } from "./deleteTodo";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/todos", getTodos);
app.post("/api/todos", addTodo);
app.put("/api/todos/:id", updateTodo);
app.delete("/api/todos/:id", deleteTodo);

app.listen(PORT, () =>
  console.log(`✅ Backend running on http://localhost:${PORT}`),
);

export default app;
