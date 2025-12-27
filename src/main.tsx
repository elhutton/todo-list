import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const tasks = [
  { id: "todo-1", name: "do this", completed: true },
  { id: "todo-2", name: "and this", completed: false },
  { id: "todo-3", name: "also this", completed: false },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={tasks} />
  </StrictMode>
);
