import { ADD_TODO, CHANGE_TYPE, DELETE_TODO, SET_TODO_NAME, TOGGLE_COMPLETE } from "../../utils/constant"

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

const toggleComplete = (id) => {
    return {
        type : TOGGLE_COMPLETE,
        payload : id
    }
}

const deleteTodo = (id) => {
    return {
        type : DELETE_TODO,
        payload : id
    }
}

export {
    addTodo,
    changeType,
    setTodoName,
    toggleComplete,
    deleteTodo
}