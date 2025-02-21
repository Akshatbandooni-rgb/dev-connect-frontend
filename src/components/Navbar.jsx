import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">DevConnect</h1>
      <div className="navbar-buttons">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
