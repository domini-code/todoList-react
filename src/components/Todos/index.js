import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    const { todos, markCompleted, delTodo } = this.props;
    return todos.map(todo => (
      <Todo key={todo.id} todo={todo} markCompleted={markCompleted} delTodo={delTodo} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
