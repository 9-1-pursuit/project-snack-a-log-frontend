import { Link } from "react-router-dom";
import Logo from "../assets/heart-solid.png";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="logo" height="40px" />
      </Link>
      <Link to="/snacks">Snack-A-Log</Link>
      <Link to="/snacks/new">New Snack</Link>
      <Link to="/About">About</Link>
    </nav>
  );
}
