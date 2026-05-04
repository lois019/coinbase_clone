import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token on app load
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  const signIn = (userData) => {
    setUser(userData);
    if (userData.token) {
      localStorage.setItem('token', userData.token);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
