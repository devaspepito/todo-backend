# Todo Backend

Este proyecto es el backend de una aplicación de tareas (Todo) construido con **Express** y **TypeScript**. Utiliza un archivo JSON para almacenar las tareas y expone una API RESTful.

## Instalación

1. Clona el repositorio (si aún no lo has hecho):

   ```bash
   git clone https://github.com/devaspepito/todo-backend.git
   cd todo-backend
   ```

2. Instala las dependencias:

   ```bash
   bun install
   ```

## Ejecución en desarrollo

Para iniciar el servidor en modo desarrollo (con recarga automática):

```bash
bun run dev
```

El backend estará disponible en [http://localhost:4000](http://localhost:4000).

> **Debug:**  
> Al iniciar el servidor, se muestra en consola el puerto exacto en el que se está ejecutando la API, para facilitar el desarrollo y la depuración.

## Scripts disponibles

- `bun run dev` — Inicia el servidor en modo desarrollo con recarga automática.
- `bun run start` — Inicia el servidor en modo producción.

## Endpoints de la API

La API expone los siguientes endpoints bajo la ruta `/api/todos`:

- **GET** `/api/todos` — Obtiene todas las tareas.
- **POST** `/api/todos` — Crea una nueva tarea.  
  **Body:** `{ "text": string }`
- **PUT** `/api/todos/:id` — Actualiza una tarea existente.  
  **Body:** `{ "text"?: string, "completed"?: boolean }`
- **DELETE** `/api/todos/:id` — Elimina una tarea.

Las tareas tienen la siguiente estructura:

```json
{
  "id": 123456789,
  "text": "Texto de la tarea",
  "completed": false
}
```

## Estructura de archivos principal

- [`index.ts`](index.ts): Punto de entrada del servidor Express.
- [`src/addTodo.ts`](src/addTodo.ts): Lógica para crear tareas.
- [`src/getTodos.ts`](src/getTodos.ts): Lógica para obtener tareas.
- [`src/updateTodo.ts`](src/updateTodo.ts): Lógica para actualizar tareas.
- [`src/deleteTodo.ts`](src/deleteTodo.ts): Lógica para eliminar tareas.
- [`src/todoStorage.ts`](src/todoStorage.ts): Funciones para leer y escribir el archivo JSON.
- [`src/types.ts`](src/types.ts): Definición del tipo `Todo`.
- [`todos.json`](todos.json): Archivo donde se almacenan las tareas.

## Notas

- El backend utiliza CORS para permitir peticiones desde el frontend.
- Asegúrate de que el puerto `4000` esté libre antes de iniciar el servidor.
- El archivo `todos.json` se crea automáticamente si no existe.

---

Este proyecto fue creado usando [Bun](https://bun.com)
