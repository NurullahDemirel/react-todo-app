import {memo} from "react";

const Todo = ({todo,deleteItem,changeTodoStatus,checkboxReadOnly,isDarkMode,setFormData}) => {
   return(
       <div className={'flex justify-between items-center w-full mt-5'}>
          <p className={`${isDarkMode  ? 'text-white' : 'text-blue-900'}`}>
              {todo?.description}
          </p>
           <div className={'flex justify-center items-center gap-x-5 xs:flex-col'}>
              <div className={'flex justify-between gap-3 items-center'}>
                  <input type="checkbox" onChange={()=>changeTodoStatus(todo)} checked={todo.isComplete} height={50} disabled={checkboxReadOnly}/>
                  <button className={`p-1 rounded outline outline-red-700 ${isDarkMode ? 'text-white' : '' }`} onClick={() => deleteItem(todo)}>Delete</button>
                  <button className={`p-1 rounded outline outline-green-500-700 ${isDarkMode ? 'text-white' : ''}`} onClick={() => setFormData(todo)} >Update</button>
              </div>
           </div>
       </div>
   )
}
export default memo(Todo);