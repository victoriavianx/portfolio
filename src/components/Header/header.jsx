import { BiMoon, BiSun } from "react-icons/bi";
import { Container, Logo, NavBox, ThemeButton } from "./styles";

const Header = () => {
  return (
    <Container>
      <NavBox>
        <Logo href="/">{"< Victoria />"}</Logo>
        <ThemeButton>
          <BiSun />
        </ThemeButton>
      </NavBox>
    </Container>
  );
};

export default Header;
