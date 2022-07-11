import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { themes } from "./theme";
import { useContext } from "react";
import { ThemeContext } from "./providers/Theme/theme";
import Portfolio from "./pages";

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
