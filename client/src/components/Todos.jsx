import React from 'react';
import { getTodos } from '../hooks/useApi';
import '../styles/Todos.scss';

const Todos = () => {
  const { todos, totalTodos, todosPerPage, handlePageChange, currentPage } =
    getTodos('https://jsonplaceholder.typicode.com/todos');
  console.log('todos: ', todos);

  return (
    <div className="todosContainer">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            task {todo.id}: {todo.title}
            <br /> status: {todo.completed ? 'done' : 'in progress'}
          </li>
        ))}
      </ul>
      <div>
        <button name="prev" onClick={(e) => handlePageChange(e.target.name)}>
          previous
        </button>
        <button name="next" onClick={(e) => handlePageChange(e.target.name)}>
          next
        </button>
      </div>
    </div>
  );
};

export default Todos;
