import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState({
    isLight: false,
    darkTheme: {
      ui: "#1a1b21",
      footerBg: "#161619",
      textPrimary: "#fff",
      textSecondary: "#DCDCDC",
      secondaryHeading: " #F3BF99",
    },
    lightTheme: {
      ui: "#F5F5F5",
      footerBg: "#D5D4D8",
      textPrimary: "#2B283A",
      textSecondary: "#4A4E74",
      secondaryHeading: "#F47D27",
    },
  });

  const toggleTheme = () => setTheme({ ...theme, isLight: !theme.isLight });
  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
