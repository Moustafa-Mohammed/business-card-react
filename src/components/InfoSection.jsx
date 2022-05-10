import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../images/photo.webp";

function InfoSection() {
  return (
    <section>
      <img src={logo} alt="developer photo" className="logo" />
      <div className="container">
        <h1 className="main--heading">Mostafa Mohamed</h1>
        <h5 className="secondary--heading">Frontend Developer</h5>
        <div className="btn-group">
          <a href="#" className="btn btn--white">
            <MdEmail style={{ marginRight: "1rem" }} />
            <span>Email</span>
          </a>
          <a href="#" className="btn btn--primary">
            <FaLinkedin style={{ marginRight: "1rem" }} />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
