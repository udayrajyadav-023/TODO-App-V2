import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import "./WelcomeMessage.css"

const WelcomeMessage=()=>{

  const {todoitems}= useContext(TodoItemsContext);
 
  return todoitems.length === 0 && <marquee    className="welcome">Enjoy Your Day. No Task For The day</marquee>
}
//behavior="alternate"
export default WelcomeMessage;