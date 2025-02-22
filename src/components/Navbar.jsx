import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">⚡ DevConnect</div>
      <div className="nav-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
