import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Main() {
  const { isLight, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLight ? lightTheme : darkTheme;
  return (
    <main className="main" style={{ backgroundColor: theme.ui }}>
      <div className="container">
        <h4 style={{ color: theme.textPrimary }} className="sub-heading">
          About me
        </h4>
        <p style={{ color: theme.textSecondary }} className="text">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>

        <h4 style={{ color: theme.textPrimary }} className="sub-heading">
          Interests
        </h4>
        <p style={{ color: theme.textSecondary }} className="text">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
}

export default Main;
