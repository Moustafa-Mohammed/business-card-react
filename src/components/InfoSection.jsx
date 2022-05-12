import React, { useContext } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import ModeButton from "./ModeButton";

import { ThemeContext } from "../context/ThemeContext";

function InfoSection() {
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;

  return (
    <section style={{ backgroundColor: theme.ui }} className="section">
      {/* <ModeButton /> */}
      <div className="card-img--container"></div>
      <div className="container">
        <h1 style={{ color: theme.textPrimary }} className="main--heading">
          Mostafa Mohamed
        </h1>
        <h5
          style={{ color: theme.secondaryHeading }}
          className="secondary--heading"
        >
          Frontend Developer
        </h5>
        <div className="btn-group">
          <a href="#" className="btn btn--white">
            <MdEmail style={{ marginRight: "1rem" }} />
            <span>Email</span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/moustafa-mohammed/"
            className="btn btn--primary"
          >
            <FaLinkedin style={{ marginRight: "1rem" }} />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
