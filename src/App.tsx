import "./App.css";
import Todo from "./components/Todo.tsx";

function App() {
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
        <Todo id="todo-1" name="Do this" completed />
        <Todo id="todo-2" name="And this" />
        <Todo id="todo-3" name="Also this" />
      </ul>
    </>
  );
}

export default App;
