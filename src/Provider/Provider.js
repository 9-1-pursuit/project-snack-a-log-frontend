import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav.js";
import Footer from "../Components/Footer.js";
// import "../Components/darkMode.css";

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

export default function Provider({ children }) {
  const API = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    // console.log("Provider's useEffect")
    axios
      .get(`${API}/snacks`)
      .then((resp) => setSnacks(resp.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ContextData.Provider
      value={{
        API,
        axios,
        snacks,
        setSnacks,
        theme,
        setTheme,
        hidden,
        setHidden
      }}
    >
      <Nav />
      <Footer />
      {children}
    </ContextData.Provider>
  );
}
