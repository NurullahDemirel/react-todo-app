import {memo, useCallback, useEffect, useMemo, useReducer} from "react";
import {requests} from "./Reqest/Reaqest";
import axios from "axios";
import AddTodo from "./AddTodo";
import AllTodo from "./AllTodo";

import {reducer} from "./Recuders/TodoReducers";

const Todos = ({isDarkMode}) => {
    const [state, dispatch] = useReducer(reducer, {
        todos: [],
        todo: {text:'',isComplete:false},
        buttonIsDisabled:false,
        checkboxReadOnly:false,
        updateButtonVisible:false
    });

    useEffect(() => {
        fetchData();
    }, []);

    const updateBtn = document.getElementById('updateBtn');

    const fetchData =  () => {
        axios.get(requests.url).then(response => {
            dispatch({
                type: 'set_todos', todos: response.data
            });
        })
    }

    const addTodo =  useCallback(() => {
        if (checkInput()){
            changeDisableStatus();
            const data = {id:state.todos.length+1,description:state.todo.text,createdAt:getCurrentTimestamp(),isComplete:state.todo.isComplete };
            axios.post(requests.url,data).then(respponse => {
                clearInput();
                dispatch({
                    type:'change_update_button_visible',
                    value:false
                })
                dispatch({
                    type:'add_todo',
                    todo:respponse.data
                })
                changeDisableStatus();
            })
        }
        else {
            alert('get description minimum 3 length');
        }
    },[state.todo])

    const updateTodo = (e) =>{
        if (checkInput()){
            const todoId = e.target.getAttribute('todo-id');
            axios.put(`${requests.url}/${todoId}`,{
                isComplete:state.todo.isComplete,
                description:state.todo.text
            }).then(response => {
                clearInput();
                changeForTodoIsComplete(false);
                dispatch({
                    type:'set_todos',
                    todos:state.todos.map((item) => item.id === todoId ? {...item,isComplete:state.todo.isComplete,description:state.todo.text} : item )
                })
            })
        }
        else {
            alert('get description minimum 3 length');
        }
    }

    const deleteItem =useCallback( todo => {
        axios.delete(`${requests.url}/${todo.id}`).then(response => {
            dispatch({
                type:'set_todos',todos:state.todos.filter((item) => item.id !== todo.id)

            })
            alert(`${response.data.id} id todo was deleted`);
        })
    },[state.todos]);

    const changeTodoStatus = useCallback(todo => {
        changeReadOnly();
        axios.put(`${requests.url}/${todo.id}`,{
            isComplete:!todo.isComplete
        }).then(response => {
            dispatch({
                type:'change_status',
                value:todo
            })
            changeReadOnly();
        })
    },[state.todos])

    const changeDisableStatus=  () => {
        dispatch({
            type:'change_disable_status'
        })

    }

    const changeReadOnly=  () => {
        dispatch({
            type:'change_raed_only'
        })
    }
    const changeForTodoIsComplete = (e) => {
        dispatch({
            type:'change_form_is_complete',
            value:e.target.checked
        })
    }

    const checkInput = () => {
        return !(state.todo.text.length <3) ;
    }

    const clearInput = () => {
      dispatch({
          type:'set_todo',
          value:''
      });
        dispatch({
            type:'set_form_is_complete',
            value:false
        })
    }
    const changeTodo = useCallback(e => {
        dispatch({
            type:'set_todo',
            value:e.target.value
        })
    },[state.todo])

    const setFormData = useCallback(todo => {
        updateBtn.setAttribute('todo-id',todo.id);
        dispatch({
            type:'set_form_todo',
            todo : todo
        })
        dispatch({
            type:'change_update_button_visible',
            value:true
        })

    },[state.todo])
    const getCurrentTimestamp = () =>  {
        return Date.now()
    }

    return (
        <>
            <AddTodo updateTodo={updateTodo} updateButtonVisible={state.updateButtonVisible}  isDarkMode={isDarkMode} addTodo = {addTodo} todo={state.todo} changeTodo={changeTodo} disable={state.buttonIsDisabled} changeForTodoIsComplete={changeForTodoIsComplete} />
            <AllTodo setFormData={setFormData} isDarkMode={isDarkMode}  todos={state.todos} deleteItem ={deleteItem} changeTodoStatus = {changeTodoStatus} checkboxReadOnly={state.checkboxReadOnly}/>
        </>
    )
}

export default Todos;