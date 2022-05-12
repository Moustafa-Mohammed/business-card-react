import React, { useContext } from "react";
import twitterIcon from "../images/Twitter Icon.png";
import facebookIcon from "../images/Facebook Icon.png";
import instagramIcon from "../images/Instagram Icon.png";
import gitHubIcon from "../images/GitHub Icon.png";

import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;
  return (
    <footer style={{ backgroundColor: theme.footerBg }} className="footer">
      <div className="container">
        <a
          href="https://github.com/Moustafa-Mohammed"
          target={"_blank"}
          className="social-icon--container"
        >
          <img src={twitterIcon} className="social-icon" />
        </a>
        <a href="" target={"_blank"} className="social-icon--container">
          <img src={facebookIcon} className="social-icon" />
        </a>
        <a href="" target={"_blank"} className="social-icon--container">
          <img src={instagramIcon} className="social-icon" />
        </a>
        <a
          href="https://github.com/Moustafa-Mohammed"
          target={"_blank"}
          className="social-icon--container"
        >
          <img src={gitHubIcon} className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
