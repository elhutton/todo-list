import { useState, type ChangeEvent } from "react";

function Todo({
  name,
  completed,
  id,
  editing,
  toggleTask,
  deleteTask,
  editTask,
  renameTask,
}: {
  name: string;
  completed?: boolean;
  id: string;
  editing: boolean;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string) => void;
  renameTask: (id: string, name: string) => void;
}) {
  const [value, setValue] = useState(name);

  function handleToggle() {
    toggleTask(id);
  }

  function handleDelete() {
    deleteTask(id);
  }

  function handleEdit() {
    editTask(id);
  }

  function handleRename() {
    renameTask(id, value);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  const normalView = (
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
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );

  const editView = (
    <li className="task">
      <p>
        Rename <b>{name}</b> to
      </p>
      <div className="task-check">
        <input id={id} type="text" onChange={handleChange}></input>
      </div>
      <div>
        <button onClick={handleRename}>Save</button>
      </div>
    </li>
  );

  return editing ? editView : normalView;
}

export default Todo;
