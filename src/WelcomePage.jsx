import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Todo List Maker!</h1>
      <p className="text-lg mb-6">Manage your tasks efficiently with this simple application.</p>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Signup
        </Link>
        <Link
          to="/show_list"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Show My Todo List
        </Link>
      </div>
    </div>
  );
};
export default WelcomePage;