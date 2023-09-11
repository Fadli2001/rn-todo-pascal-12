const addTodo = (newTodo) => {
    return { 
        type : "ADD_TODO",
        payload : newTodo
    }
}

const changeType =(type) => {
    return {
        type : "CHANGE_TYPE",
        payload : type
    }
}

export {
    addTodo,
    changeType
}