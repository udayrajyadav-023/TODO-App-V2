import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import Todoitems from "./Components/Todoitems";
import { useReducer, useState } from "react";
import TodoItemsContextProvider, { TodoItemsContext } from "./Store/todo-items-store";



function App() {
 
  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName/>
      <AddTodo />
      <WelcomeMessage />
      <Todoitems/>
    </center>
    </TodoItemsContextProvider>  
  );
}

export default App;
