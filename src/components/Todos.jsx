
import { MdOutlineDeleteOutline , MdEditNote } from 'react-icons/md';
import { useTodoValueContext } from '../contexts/TodoValue';


const TodosList = ({ todos, setTodos }) => {

  const {todoValue , setTodoValue} = useTodoValueContext();
  function handleChecked(e, id) {

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { title: todo.title, isCompleted: e.target.checked, id: todo.id }
          : { title: todo.title, isCompleted: todo.isCompleted, id: todo.id }
      )
    );
  }

function handleEditTodo(todo){
  setTodoValue(todo.title)
}

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="todos-list">
      <ul>
        {todos.map((todo , key) => (
          <li className={todo.isCompleted ? "iscomplete" : ""} key={key}>
            <input type="checkBox" onChange={(e) => handleChecked(e, todo.id)} checked={todo.isCompleted}/>
            <div className="todo-content">
               <span>{todo.title}</span> 
            </div>
            <button onClick={() => handleEditTodo(todo)}><MdEditNote /></button>
            <button onClick={() => handleDeleteTodo(todo.id)}><MdOutlineDeleteOutline /></button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
