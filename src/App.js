import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { themes } from "./theme";
import { useContext } from "react";
import { ThemeContext } from "./providers/Theme/theme";
import Routes from "./routes";

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
