import Provider from "./Provider/Provider";
import RouteComponent from "./Components/RouteComponent";
import { useState, useEffect } from "react";
// import darkMode from "./assets/darkmode.png";
// import lightMode from "./assets/lightmode.png";
import "./Components/darkMode.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Provider>
        {/* <button className="toggleTheme" onClick={toggleTheme}> */}
        {/* Toggle */}
        {/* {theme === "light" ? (
            <img className="toggleButton" src={darkMode} alt="dm" />
          ) : (
            <img className="toggleButton" src={lightMode} alt="lm" />
          )} */}
        {/* </button> */}
        <RouteComponent />
      </Provider>
    </div>
  );
}

export default App;
