import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import Logo from "../assets/heart-solid.png";
import darkMode from "../assets/darkmode.png";
import lightMode from "../assets/lightmode.png";
import "./Nav.css";

export default function Nav() {
  const { theme, setTheme } = useContextProvider();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="logo" height="40px" />
      </Link>
      <Link to="/snacks">Snack-A-Log</Link>
      <Link to="/snacks/new">New Snack</Link>
      <Link to="/About">About</Link>
      <button className="toggleTheme" onClick={toggleTheme}>
        {theme === "light" ? (
          <img className="toggleButton" src={lightMode} alt="lm" />
        ) : (
          <img className="toggleButton" src={darkMode} alt="lm" />
        )}
      </button>
    </nav>
  );
}
