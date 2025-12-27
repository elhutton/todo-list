import "./App.css";

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
        <li className="task">
          <div className="task-check">
            <input type="checkbox"></input>
            <label>Do this task</label>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
        <li className="task">
          <div className="task-check">
            <input type="checkbox"></input>
            <label>Also this one</label>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
        <li className="task">
          <div className="task-check">
            <input type="checkbox"></input>
            <label>Don't forget this one</label>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </>
  );
}

export default App;
