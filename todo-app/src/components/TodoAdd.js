import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
        this.onAddTodo = this.onAddTodo.bind(this);
        this.addTodoToList = this.addTodoToList.bind(this);
    }

    onAddTodo(event) {
        let newTodo = event.target.value;
        this.setState({
            input: newTodo,
        })
    }

    addTodoToList() {
        const todo = {
            task: this.state.input,
            completed: false
        }
        this.props.addTodo(todo);
        this.setState({
            input: "",
        })
    }

    render() {
        return (
            <div className="addBar">
                <input placeholder="add a todo" onChange={this.onAddTodo} value={this.state.input} />
                <button onClick={this.addTodoToList}>Add</button>
            </div>
        );
    }
}

export default connect(null, { addTodo })(TodoAdd);