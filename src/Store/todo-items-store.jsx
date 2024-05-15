import { createContext, useReducer } from "react";

export const TodoItemsContext=createContext([{
  todoitems:[],
  addNewItem: ()=>{},
  deleteItem: ()=>{}
}]);


const todoitemReducer =(Currtodoitems,action)=>{
  let NewTodoItems=Currtodoitems;
  if(action.type === "NEW_ITEM"){
    NewTodoItems=[...Currtodoitems,{name: action.payload.itemName, duedate: action.payload.itemDueDate}];
  }
  else if(action.type === "DELETE_ITEM"){
    NewTodoItems=Currtodoitems.filter((item)=>item.name !== action.payload.itemName);
  }
return NewTodoItems;
}

const TodoItemsContextProvider=({children})=>{
  
  //const [todoitems,setTodoitems]=useState([]);
  const [todoitems,dispatchTodoitems]=useReducer(todoitemReducer,[]);

   
  const addNewItem=(itemName,itemDueDate)=>{
      
        const NewitemAction={
          type:'NEW_ITEM',
          payload:{
            itemName,
            itemDueDate
          }
        };
        dispatchTodoitems(NewitemAction);
      //  setTodoitems((currValue)=>[...currValue,{name: itemName, duedate: itemDueDate}]
      //);
    }

  const deleteItem=(itemName)=>{
     const DeleteItemAction={
      type:"DELETE_ITEM",
      payload:{
          itemName:itemName,
      }
     };
     dispatchTodoitems(DeleteItemAction);
    // const newTodoitems=todoitems.filter((item)=>item.name != itemName);
    // setTodoitems(newTodoitems);
  }

  return <TodoItemsContext.Provider value={{todoitems,addNewItem,deleteItem }}>
    {children}
  </TodoItemsContext.Provider>
}
export default TodoItemsContextProvider;