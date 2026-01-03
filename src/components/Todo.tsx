function Todo({
  name,
  completed,
  id,
  toggleTask,
  deleteTask,
}: {
  name: string;
  completed?: boolean;
  id: string;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}) {
  function handleToggle() {
    toggleTask(id);
  }

  function handleDelete() {
    deleteTask(id);
  }

  return (
    <li className="task">
      <div className="task-check">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={handleToggle}
        ></input>
        <label htmlFor={id}>{name}</label>
      </div>
      <div>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default Todo;
