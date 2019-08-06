import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todo extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { todo, markCompleted, delTodo } = this.props;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={markCompleted.bind(this, todo.id)}
          />{' '}
          {todo.title}
          <button onClick={delTodo.bind(this, todo.id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};
export default Todo;
