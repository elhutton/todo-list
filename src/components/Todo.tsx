function Todo({
  name,
  completed,
  id,
}: {
  name: string;
  completed?: boolean;
  id: string;
}) {
  return (
    <li className="task">
      <div className="task-check">
        <input id={id} type="checkbox" defaultChecked={completed}></input>
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
