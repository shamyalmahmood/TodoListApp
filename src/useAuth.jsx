import { useState, useEffect } from 'react';
import supabase from './supabaseClient.jsx';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    checkSession();
  }, []);

  return { isAuthenticated };
};
export default useAuth;