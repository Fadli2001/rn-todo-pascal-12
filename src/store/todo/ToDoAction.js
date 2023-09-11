import { ADD_TODO, CHANGE_TYPE, SET_TODO_NAME } from "../../utils/constant"

const addTodo = (newTodo) => {
    return { 
        type : ADD_TODO,
        payload : newTodo
    }
}

const changeType =(type) => {
    return {
        type : CHANGE_TYPE,
        payload : type
    }
}

const setTodoName = (text) => {
    return {
        type : SET_TODO_NAME,
        payload : text
    }
}

export {
    addTodo,
    changeType,
    setTodoName
}