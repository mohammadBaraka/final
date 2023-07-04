import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { handeMessage } from "../Components/SweetAlert/SweetAlert";
export const ContextApi = createContext();

export const AuthContext = ({ children }) => {
  const URL = `http://localhost:8000/api/login`;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(URL, inputs, {
      withCredentials: true,
    });
    setCurrentUser(res.data.data);
    handeMessage("success", res.data.message);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <ContextApi.Provider value={{ currentUser, login }}>
      {children}
    </ContextApi.Provider>
  );
};
