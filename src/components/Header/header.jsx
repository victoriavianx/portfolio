import { BiMoon, BiSun } from "react-icons/bi";
import { Container, Logo, NavBox, ThemeButton } from "./styles";
import { ThemeContext } from "../../providers/Theme/theme";
import { useContext } from "react";

const Header = () => {
  const { changeTheme, currentTheme, setCurrentTheme } =
    useContext(ThemeContext);

  const handleTheme = () => {
    setCurrentTheme(changeTheme);
  };

  return (
    <Container>
      <NavBox>
        <Logo href="/">{"< Victoria />"}</Logo>
        {currentTheme === "light" ? (
          <ThemeButton onClick={handleTheme}>
            <BiMoon />
          </ThemeButton>
        ) : (
          <ThemeButton onClick={handleTheme}>
            <BiSun />
          </ThemeButton>
        )}
      </NavBox>
    </Container>
  );
};

export default Header;
