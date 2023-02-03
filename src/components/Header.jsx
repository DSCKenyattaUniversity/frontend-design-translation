import "./Header.css";
// import { ReactComponent as Menu } from "../assets/instagram.svg";
import menuIcon from "../assets/instagram.svg";

export default function Header () {
    return (
        <header className="Header">
            <a href="/" alt="Edie" className="logo">Edie</a>
            {/* <Menu className="menu-icon" /> */}
            <img src={menuIcon} alt="menu-icon" className="menu-icon" />
        </header>
    )
}
