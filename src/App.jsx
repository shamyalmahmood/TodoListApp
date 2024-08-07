import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomePage from './WelcomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import TodoListPage from './TodoListPage.jsx';
import AddTodoPage from './AddTodoPage.jsx';
import useAuth from './useAuth.jsx'; 

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/show_list"
        element={<PrivateRoute element={<TodoListPage />} />}
      />
      <Route
        path="/add_todo"
        element={<PrivateRoute element={<AddTodoPage />} />}
      />
    </Routes>
  );
};
export default App;