import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <a href="" target={"_blank"}>
        <FaTwitterSquare />
      </a>
      <a href="" target={"_blank"}>
        <FaFacebookSquare />
      </a>
      <a href="" target={"_blank"}>
        <FaInstagramSquare />
      </a>
      <a href="" target={"_blank"}>
        <FaGithubSquare />
      </a>
    </div>
  );
}

export default Footer;
