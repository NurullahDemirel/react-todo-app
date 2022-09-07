import {memo} from "react";

const AddTodo = ({addTodo,todo,changeTodo,disable,changeForTodoIsComplete,isDarkMode,updateButtonVisible,updateTodo}) =>{
 return (
    <>
        <div className={'w-[75%] flex items-center h-full m-auto mt-5 px-2'}>
            <form action="" className={'w-full h-full flex items-center pl-2 bg-white'}>
                <input type="text" placeholder={'Enter a description'} className={`w-[80%] focus:outline-none ${!isDarkMode ? 'border border-gray-800 rounded' : '' }`} value={todo.text} onChange={changeTodo}/>
                <input type="checkbox" onChange={changeForTodoIsComplete} checked={todo.isComplete}   className={'w-[10%] focus:outline-none h-[44px] mr-2'} />
                <button type='button' className={ `p-2 bg-red-600 w-[11%] ${updateButtonVisible ? 'mr-2' : ''}`} onClick={addTodo} disabled={disable} >Add</button>
                <button type='button' onClick={updateTodo} className={`p-2 bg-red-600 w-[11%] mr-2 ${!updateButtonVisible ? 'd-none' : ''}`}  disabled={disable} id="updateBtn" >Update</button>
            </form>
        </div>

    </>
 )
}
export default memo(AddTodo);