import { Link } from "react-router-dom"
// import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="">
            <Link to="/"><h1>Snack-A-Log</h1></Link>
            <Link to="/snacks/new"><h2>Add Snack</h2></Link>
            <Link to="/snacks"><h2>All Snacks</h2></Link>
        </nav>
    );
}

export default NavBar;