import { NavLink } from "react-router-dom";
import "./index.css";
import "./boostrap.css";

export function NavBar() {
    return (
        <nav className="navbar-container">
            <NavLink className={"btn btn-primary"} to="/">
                Home
            </NavLink>
            <NavLink className={"btn btn-primary"} to="/call">Call</NavLink>
        </nav>
    );
}
