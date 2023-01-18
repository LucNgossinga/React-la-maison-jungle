import "../styles/banner.css";
import logo from "../assets/logo.png";

function Banner() {
  return (
    <div className="lmj-banner">
      <h1>La maison jungle</h1>
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
    </div>
  );
}

export default Banner;