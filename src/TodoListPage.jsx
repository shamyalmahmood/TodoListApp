import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo } from './redux/todoSlice.jsx';
import TodoList from './TodoList.jsx';
import FilterButtons from './FilterButtons.jsx';
import LogoutButton from './LogoutButton.jsx';

const TodoListPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggle = (id, completed) => {
    dispatch(toggleTodo(id, !completed));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <LogoutButton />
      <FilterButtons />
      <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};
export default TodoListPage;