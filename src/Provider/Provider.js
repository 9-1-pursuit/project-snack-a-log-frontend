import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav.js";
import Footer from "../Components/Footer.js";

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

export default function Provider({ children }) {
  const API = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    // console.log("Provider's useEffect")
    axios.get(`${API}/snacks`)
    .then((resp) => setSnacks(resp.data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <ContextData.Provider
      value={{
        API,
        axios,
        snacks,
        setSnacks
      }}
    >
      <Nav />
      <Footer />
      {children}
    </ContextData.Provider>
  );
}
