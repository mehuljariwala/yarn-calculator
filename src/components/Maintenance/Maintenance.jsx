import React from "react";
import "./Maintenance.css";
import whatsapp from "../../icons/whatsapp-icon.svg";

function redirectToWhatsapp() {
  window.open(`https://api.whatsapp.com/send?phone=+917802911611`, "_blank");
}

export default function Maintenance() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <h1 className="maintenance-title">LOTUS INTERNATIONAL</h1>
        <div className="maintenance-tagline">LACES THAT SHINE YOUR FASHION</div>

        <div className="maintenance-icon">
          <i className="fas fa-credit-card"></i>
        </div>

        <h2 className="maintenance-heading">Service Temporarily Unavailable</h2>

        <p className="maintenance-message">
          It looks like the server payment was not made, due to that the site
          will not be able to perform. Our website will be back online once the
          payment is processed. Thank you for your patience.
        </p>

        <div className="maintenance-contact">
          <p>For urgent inquiries, please contact us:</p>
          <div className="maintenance-whatsapp" onClick={redirectToWhatsapp}>
            <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
            <span>7802911611</span>
          </div>
        </div>
      </div>
    </div>
  );
}
