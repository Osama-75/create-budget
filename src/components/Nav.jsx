import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./nav.css"
export default function Nav() {
    return (
        <nav >
            <NavLink
                to="/"
                aria-label="Go to home"
            >
                <img src={Logo} alt="" height={30} />
                <span>BUDGET</span>
            </NavLink>
        </nav>
    )
}