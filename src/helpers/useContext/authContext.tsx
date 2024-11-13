'use client';
import { createContext, useContext, useEffect, useState } from 'react';

// Define your authentication context
const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: (authenticated: boolean) => void;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Define your search context
const SearchContext = createContext<{
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}>({
  showSearch: false,
  setShowSearch: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <SearchContext.Provider value={{ showSearch, setShowSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
