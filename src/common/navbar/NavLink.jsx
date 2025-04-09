import "./navbar.scss";
import { Link } from "react-router-dom";

const NavLink = ({
    name = "",
    route = "",
}) => {
    return <>
        <Link to={route} className="navlink">{name}</Link>
    </>
}

export default NavLink;