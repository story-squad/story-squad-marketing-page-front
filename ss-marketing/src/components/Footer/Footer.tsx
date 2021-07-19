import "./Footer.css";
import Logo from "../Home/imgs/logo-pencilGuy.png";
function Footer() {
  return (
    <div className="footerContainer">
      <div className="imgAndCopyright">
        <img src={Logo} alt="logo pencil guy" />
        <p>©2021 Story Squad HQ</p>
      </div>
      <div className="footerLinks">
        <p>Contact</p>
        <p>FAQs</p>
        <p>Privacy</p>
        <p>Terms</p>
      </div>
    </div>
  );
}

export default Footer;
