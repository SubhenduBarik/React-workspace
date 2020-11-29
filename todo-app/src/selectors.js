import { VISIBILITY_FILTERS } from './Constants'

export const getTodos = (store) => {
    return store.todos
}

export const getTodosByFilter = (store, visibility) => {
    const allTodos = getTodos(store);
    switch (visibility) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default: return allTodos;
    }
}

export const toggleTodos = (store, todoId) =>{
    const allTodos = store;
    let index = allTodos.findIndex( x => x.id === todoId);
    allTodos[index].completed = !allTodos[index].completed;
    return allTodos;
}