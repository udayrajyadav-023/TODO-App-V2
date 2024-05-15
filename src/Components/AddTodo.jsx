import { useRef, useContext } from "react";
import styles from "./AddTodo.module.css";
import { MdOutlineDownloadDone } from "react-icons/md";
import { TodoItemsContext } from "../Store/todo-items-store";

function AddTodo() {
// const [TodoName,setTodoName]=useState('');
// const [Duedate,SetDuedate]=useState('');

 const {addNewItem} = useContext(TodoItemsContext);

const todonameElement = useRef();
const dueDateElement = useRef();

// const HandleNameChange=(event)=>{
//   setTodoName(event.target.value);
// }

// const HandleDateChange=(event)=>{
//   SetDuedate(event.target.value)
// }

const HandleAddButtonClicked=()=>{
  const TodoName=todonameElement.current.value;
  const Duedate=dueDateElement.current.value;
  todonameElement.current.value='';
  dueDateElement.current.value='';
  addNewItem(TodoName,Duedate);
  // setTodoName('');
  // SetDuedate('');

}

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
          ref={todonameElement}
            className={styles.input}
            type="text"
            placeholder="Enter Todo here"
            // value={TodoName}
          //  onChange={HandleNameChange}
          />
        </div>
        <div className="col-4">
          <input className={styles.input} type="date" ref={dueDateElement}
          //  value={Duedate} onChange={HandleDateChange}
           />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-success kg-button"
          onClick={HandleAddButtonClicked}
          >
           <MdOutlineDownloadDone />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
