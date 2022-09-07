import todo from "../Todo";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'set_todo':
            return {
                ...state, todo: {...state.todo,text:action.value}
            }
        case 'add_todo' :
            return {
                ...state, todos: [...state.todos, action.todo]
            }
        case 'set_todos':
            return {
                ...state, todos: action.todos
            }
        case 'change_disable_status':
            return {
                ...state, buttonIsDisabled: !state.buttonIsDisabled
            }
        case 'change_status':
            return {
                ...state, todos:state.todos.map((item) => item.id === action.value.id  ? {...item,isComplete:!item.isComplete} : item)
            }

        case 'change_raed_only':
            return {
                ...state, checkboxReadOnly: !state.checkboxReadOnly
            }
        case 'change_form_is_complete':

            if (action.value !== null){
                return {
                    ...state,todo:{...state.todo,isComplete:action.value}
                }
            }
            return {
                ...state,todo:{...state.todo,isComplete:!state.todo.isComplete}
            }

        case 'set_form_is_complete':
            return {
                ...state,todo:{...state.todo,isComplete:action.value}
            }

        case 'set_form_todo':
            return {
                ...state,todo:{text:action.todo.description,isComplete: action.todo.isComplete}
            }

        case 'change_update_button_visible':
            return {
                ...state,updateButtonVisible:action.value
            }

    }
}