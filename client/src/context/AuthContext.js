import React, { createContext } from 'react';

// Mock user data
const mockUser = {
  name: "Demo User",
  email: "demo@example.com",
  dueDate: "2024-12-31",
  preferredUnit: "mg/dL"
};

// Create context with mock values
export const AuthContext = createContext({
  user: mockUser,
  token: "mock-token",
  isAuthenticated: true,
  loading: false,
  register: () => console.log("Mock register"),
  login: () => console.log("Mock login"),
  logout: () => console.log("Mock logout"),
  getUserData: () => console.log("Mock getUserData")
});

// Auth provider that just passes mock data
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{
      user: mockUser,
      token: "mock-token",
      isAuthenticated: true,
      loading: false,
      register: () => Promise.resolve(),
      login: () => Promise.resolve(),
      logout: () => {},
      getUserData: () => Promise.resolve()
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for easy access
export const useAuth = () => React.useContext(AuthContext);