import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { themes } from "./theme";
import Router from "./routes";
import { useContext } from "react";
import { ThemeContext } from "./providers/Theme/theme";

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
