import { MdOutlineLibraryAdd } from "react-icons/md";
import { useState } from "react";
import { useTodoValueContext } from "../contexts/TodoValue";

const AddTodos = ({ addTodo }) => {

  const {todoValue , setTodoValue} = useTodoValueContext();
 

  const submit = (e) => {
    e.preventDefault();
    if (!todoValue) {
      alert("input is empty");
      return;
    }
    addTodo(todoValue);
    setTodoValue("");

  };
  return (
    <div className="add-todos">
      <form onSubmit={submit}>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder= 'Add task'
          autoFocus={true}
        />
        
        <button type="submit"><MdOutlineLibraryAdd /></button>
      </form>
    </div>
  );
};

export default AddTodos;
