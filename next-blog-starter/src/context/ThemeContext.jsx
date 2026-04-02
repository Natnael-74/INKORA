"use client";

import { createContext, useContext, useState } from "react";

function getThemeFromLocalStorage() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "light";
  }
}

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return getThemeFromLocalStorage();
  });

  function toggle() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider",
    );
  }
  return context;
}

export { ThemeContextProvider, useThemeContext };
