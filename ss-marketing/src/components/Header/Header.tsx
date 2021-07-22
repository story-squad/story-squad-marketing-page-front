import "./Header.css";

function Header() {
  return (
    <div className="nav">
      <h1 className="logo"> Story Squad</h1>
      <nav>
        <ul className="links">
          <li>
            <a href="#mission">Mission</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#aboutUs">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button className="navButton">Sign Up</button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
