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
          <Todo {...task} key={task.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
