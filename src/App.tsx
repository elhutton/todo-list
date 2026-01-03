import "./App.css";
import Todo from "./components/Todo.tsx";
import Form from "./components/Form.tsx";
import { useState } from "react";
import { nanoid } from "nanoid";

type Task = {
  id: string;
  name: string;
  completed: boolean;
};

function App({ data }: { data: Array<Task> }) {
  const [tasks, setTasks] = useState(data);

  function addTask(name: string) {
    const task = {
      name: name,
      id: `todo-${nanoid()}`,
      completed: false,
    };

    setTasks([...tasks, task]);
  }

  function toggleTask(id: string) {
    const updated = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(updated);
  }

  function deleteTask(id: string) {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  }

  return (
    <>
      <h1>To-Do List</h1>
      <Form addTask={addTask} />
      <div className="filters">
        <button>All Tasks</button>
        <button>Active Tasks</button>
        <button>Completed Tasks</button>
      </div>
      <ul className="tasks">
        {tasks?.map((task: Task) => (
          <Todo
            {...task}
            key={task.id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
