import React from 'react';
import { getTodos } from '../hooks/useApi';

const Todos = () => {
  const todos = getTodos('https://jsonplaceholder.typicode.com/todos');
  console.log('todos: ', todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {' '}
          task {todo.id}: {todo.title} ; status:{' '}
          {todo.completed ? 'done' : 'in progress'}{' '}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
