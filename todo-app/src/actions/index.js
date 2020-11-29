let todoId = 0;

export const addTodo = (todo) => {
    return {
        type: 'ADDTODO',
        payload: { id: ++todoId, ...todo }
    }
}

export const toggleTodo = todoId => {
    return {
        type: 'TOGGLETODO',
        payload: todoId
    }
}

export const listTodo = () => {
    return {
        type: 'LISTTODO'
    }
}

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        payload: filter
    }
}