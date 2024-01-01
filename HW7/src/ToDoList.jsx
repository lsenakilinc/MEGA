
import React from 'react';

const TodoList = ({ todos, filter, deleteTodo }) => {
  const filteredTodos = todos.filter((todo) => todo.toLowerCase().includes(filter));

  return (
    <ul className="list-group">
      {filteredTodos.map((todo, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
          {todo}
          <button onClick={() => deleteTodo(index)} className="btn btn-link">
            <i className="fa fa-remove"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
