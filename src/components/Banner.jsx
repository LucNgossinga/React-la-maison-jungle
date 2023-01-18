import "../styles/banner.css";
import logo from "../assets/logo.png";

function Banner() {
  const currentMonth = new Date().getMonth();
  console.log(currentMonth);
  return (
    <div className="lmj-banner">
      <h1>La maison jungle</h1>
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
    </div>
  );
}

export default Banner;
