import "./Header.css";

function Header() {
  return (
    <div className="nav">
      <p className="logo"> Story Squad</p>
      <nav>
        <ul className="links">
          <li>Mission</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
          <button className='navButton'>Sign Up</button>
        </ul>

      </nav>
    </div>
  );
}

export default Header;
