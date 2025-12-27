function Todo({
  name,
  completed,
  id,
  toggleTask,
}: {
  name: string;
  completed?: boolean;
  id: string;
  toggleTask: (id: string) => void;
}) {
  function handleToggle() {
    toggleTask(id);
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
        <button>Delete</button>
      </div>
    </li>
  );
}

export default Todo;
