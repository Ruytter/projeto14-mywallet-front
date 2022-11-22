import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function signin(u) {
    setUser({ u });
    localStorage.setItem("mywalletUser", JSON.stringify(u));
    navigate(`/saldo`);
  }

  return (
    <AuthContext.Provider value={{ signin, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
