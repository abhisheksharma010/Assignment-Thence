import { ReactNode } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Brunel" />
      </div>
      <div className="nav-buttons">{children}</div>
    </nav>
  );
};

export default Navbar;
