import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './redux/todoSlice.jsx';
import supabase from './supabaseClient.jsx';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton.jsx';

const AddTodoPage = () => {
  const [newTodo, setNewTodo] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      dispatch(createTodo(newTodo.trim()));
      setNewTodo('');
      inputRef.current.focus();
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Add Todo</h1>
      <LogoutButton />
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto bg-white p-4 shadow-md rounded">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
            ref={inputRef}
            placeholder="New Todo"
            className="p-2 mb-4 border border-gray-300 rounded"
        />
        <button
            type="submit"
            className="py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        > 
            Add Todo
        </button>
    </form>
</div>
);
};
export default AddTodoPage;