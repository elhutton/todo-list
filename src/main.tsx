import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const tasks = [
  { id: "todo-1", name: "do this", completed: true, editing: false },
  { id: "todo-2", name: "and this", completed: false, editing: false },
  { id: "todo-3", name: "also this", completed: false, editing: false },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={tasks} />
  </StrictMode>
);
