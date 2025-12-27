import "./App.css";
import Todo from "./components/Todo.tsx";

type Task = {
  id: string;
  name: string;
  completed: boolean;
};

function App({ tasks }: { tasks: Array<Task> }) {
  return (
    <>
      <h1>To-Do List</h1>
      <form>
        <input type="text"></input>
        <button type="submit">Add</button>
      </form>
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
