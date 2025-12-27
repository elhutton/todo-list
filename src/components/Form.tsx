import { useState, type ChangeEvent, type FormEvent } from "react";

function Form({ addTask }: { addTask: (name: string) => void }) {
  const [name, setName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.length > 0) {
      addTask(name);
      setName("");
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange}></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
