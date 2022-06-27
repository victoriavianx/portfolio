import { createContext } from "react";
import { useCallback, useState } from "react";

export const ThemeContext = createContext();

const ThemesProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const changeTheme = useCallback(
    () => (currentTheme === "dark" ? "light" : "dark"),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setCurrentTheme, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemesProvider;
