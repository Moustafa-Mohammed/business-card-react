import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../images/photo.webp";

function InfoSection() {
  return (
    <div className="container">
      <img src={logo} alt="" />
      <h1>Mostafa Mohamed</h1>
      <h3>Frontend Developer</h3>
      <div>
        <a href="#">
          <MdEmail />
          <span>Email</span>
        </a>
        <a href="#">
          <FaLinkedin />
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  );
}

export default InfoSection;
