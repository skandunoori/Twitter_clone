import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul>
       {
         todos.map(todo => {
           return(<TodoItem key={todo._id} todo={todo}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;