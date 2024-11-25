import { Link, NavLink } from "react-router";
export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Books">Books</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
        </nav>
    )
}