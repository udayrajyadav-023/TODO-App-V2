import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./Todoitems.module.css";
const Todoitems = () => {

 const{todoitems}= useContext(TodoItemsContext);
 
  return (
    <div className={styles["items-container"]}>
      {todoitems.map((item,index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.duedate}/>
      ))}
    </div>
  );
};
export default Todoitems;
