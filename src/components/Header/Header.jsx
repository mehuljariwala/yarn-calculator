import React from "react";
import whatsapp from "../../icons/whatsapp-icon.svg";
import "./Header.css";

function redirectToWhatsapp() {
  window.open(`https://api.whatsapp.com/send?phone=+917802911611`, "_blank");
}

export default function Header() {
  return (
    <div>
      <header className="head">LOTUS INTERNATIONAL</header>
      <div className="tagline">LACES THAT SHINE YOUR FASHION</div>
      <div className="mobNo" onClick={redirectToWhatsapp}>
        <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        7802911611
      </div>
    </div>
  );
}
