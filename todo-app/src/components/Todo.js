import React from 'react';
import './components.css';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilter';

export default function Todo(){
    return(
        <div className='todoApp'>
            <h2>The Todo App</h2>
            <hr/>
            <TodoAdd/>
            <VisibilityFilter/>
            <TodoList/>
        </div>
    );
}