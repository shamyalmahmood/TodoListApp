import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import supabase from './supabaseClient.jsx';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
    };
    checkSession();
  }, []);

  if (loading) return <div className="text-center py-4">Loading...</div>;

  return (
    <Route
      {...rest}
      element={authenticated ? Component : <Navigate to="/login" />}
    />
  );
};
export default PrivateRoute;