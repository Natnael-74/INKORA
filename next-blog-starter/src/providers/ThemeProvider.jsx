"use client";

import { useThemeContext } from "@/context/ThemeContext";

function ThemeProvider({ children }) {
  const { theme } = useThemeContext();

  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>{children}</div>
  );
}

export default ThemeProvider;
