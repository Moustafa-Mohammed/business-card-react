import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function ModeButton() {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
}

export default ModeButton;
