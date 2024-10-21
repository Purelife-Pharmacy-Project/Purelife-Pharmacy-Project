// authContext.tsx
'use client';
import { createContext, useContext, useEffect, useState } from 'react';

// Define your authentication context
const AuthContext = createContext<{ isAuthenticated: boolean; login: () => void; logout: () => void }>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

// Provide the authentication context to the rest of the app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., by checking localStorage or an API)
    const userToken = localStorage.getItem('token'); // Example: using token stored in localStorage
    setIsAuthenticated(!!userToken);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token'); // Clear the token on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);
