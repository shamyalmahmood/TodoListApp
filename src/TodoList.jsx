import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="list-disc pl-5">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default TodoList;