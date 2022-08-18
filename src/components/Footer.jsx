

const TodosFooter = ({todos}) => {
    return ( 
        <div className="todos-footer">
           
            <div>{todos.length} Tasks</div>
            <div>{todos.filter(todo=>todo.isCompleted).length} Complete</div>
            <div>{todos.filter(todo=>!todo.isCompleted).length} Open</div>
            
        </div>
     );
}
 
export default TodosFooter;