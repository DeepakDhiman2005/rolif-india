import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({
    name = "",
    route = "",
}) => {
    const { pathname } = useLocation();
    return <>
        <Link to={route} className={`${pathname === route ? 'navlink-active': 'navlink'} text-main-size`}>{name}</Link>
    </>
}

export default NavLink;