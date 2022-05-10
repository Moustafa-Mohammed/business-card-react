import React from "react";
import twitterIcon from "../images/Twitter Icon.png";
import facebookIcon from "../images/Facebook Icon.png";
import instagramIcon from "../images/Instagram Icon.png";
import gitHubIcon from "../images/GitHub Icon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="" target={"_blank"}>
          <img src={twitterIcon} className="social--icon" />
        </a>
        <a href="" target={"_blank"}>
          <img src={facebookIcon} className="social--icon" />
        </a>
        <a href="" target={"_blank"}>
          <img src={instagramIcon} className="social--icon" />
        </a>
        <a href="" target={"_blank"}>
          <img src={gitHubIcon} className="social--icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
