import Todo from "./Todo";
import {memo} from "react";

const AllTodo = ({todos,deleteItem,changeTodoStatus,checkboxReadOnly,isDarkMode,setFormData}) => {
  return (
     <div className={'all-todos w-3/4 m-auto'}>
         {
             todos.length > 0 &&
             (
                 todos.map((value,index) => (< Todo setFormData={setFormData} key={index} isDarkMode={isDarkMode} todo = {value} deleteItem = {deleteItem} changeTodoStatus={changeTodoStatus} checkboxReadOnly={checkboxReadOnly} />))
             )
         }
     </div>
  )
}
    export default memo(AllTodo);