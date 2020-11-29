import { toggleTodos } from '../selectors'
const todos = []

const todoReducer = (state = todos, action) => {
    switch (action.type) {
        case "ADDTODO": {
            return [...state, action.payload];
        }
        case "TOGGLETODO": {
            return [...toggleTodos(state, action.payload)];
        }
        default: return state;
    }
}

export default todoReducer;