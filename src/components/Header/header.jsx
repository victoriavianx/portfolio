import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { FiHome, FiUser, FiBook } from "react-icons/fi";
import { BiBriefcase } from "react-icons/bi";
import { Menu } from "@chakra-ui/react";
import {
  Container,
  IconButton,
  Item,
  List,
  Logo,
  NavBox,
  SideMenu,
  ThemeButton,
} from "./styles";
import { ThemeContext } from "../../providers/Theme/theme";

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
        <SideMenu>
          <Menu>
            <IconButton>
              <AiOutlineMenu />
            </IconButton>
            <List>
              <Link to={"/"}>
                <Item>
                  <FiHome />
                  Home
                </Item>
              </Link>
              <Link to={"/sobre"}>
                <Item>
                  <FiUser />
                  Sobre
                </Item>
              </Link>
              <Link to={"/skills"}>
                <Item>
                  <FiBook />
                  Habilidades
                </Item>
              </Link>
              <Link to={"/projetos"}>
                <Item>
                  <BiBriefcase />
                  Projetos
                </Item>
              </Link>
            </List>
          </Menu>
          {currentTheme === "light" ? (
            <ThemeButton onClick={handleTheme}>
              <BiMoon />
            </ThemeButton>
          ) : (
            <ThemeButton onClick={handleTheme}>
              <BiSun />
            </ThemeButton>
          )}
        </SideMenu>
      </NavBox>
    </Container>
  );
};

export default Header;
