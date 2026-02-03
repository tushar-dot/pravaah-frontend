import { createContext, useContext, useEffect, useState } from "react";
import { fetchMe } from "../api/menuApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    fetchMe()
      .then((data) => {
        setUser({
          userId: data.userId,
          email: data.email,
          username: data.username,
          role: data.role,
        });
        setMenus(data.menus);
      })
      .finally(() => setLoading(false));
  }, []);

  // ✅ LOGOUT FUNCTION
const logout = () => {
  localStorage.removeItem("token");
  setUser(null);
  setMenus([]);
};


  // ✅ FIX IS HERE
  return (
    <AuthContext.Provider value={{ user, menus, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
