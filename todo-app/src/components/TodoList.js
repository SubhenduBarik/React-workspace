import React from 'react';
import { connect } from 'react-redux';
import { getTodosByFilter } from '../selectors'
import { toggleTodo } from '../actions'

const TodoList = ({ todos, toggleTodo }) => (
    <div className="todoList">
        <h4>Todo List</h4>
        <ul style={{ listStyleType: 'none' }}>
            {
                todos.map(el => {
                    return (
                        <li key={`visibility-filter-${el.id}`} onClick={() => toggleTodo(el.id)}
                            className={el.completed ? "completedTask" : "incompleteTask"}>
                            {el.task}
                        </li>)
                })
            }
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    const { visibilityFilter } = state
    const todos = getTodosByFilter(state, visibilityFilter)
    return { todos }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (todoId) => dispatch(toggleTodo(todoId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);