import styled from "styled-components";
import { MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.header.backgroundColor};
  transition: 0.4s;
  max-width: 1024px;
`;

export const NavBox = styled.nav`
  width: 100%;
  margin: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  color: ${(props) => props.theme.header.color};
  font-weight: var(--font-medium);
  letter-spacing: 2px;

  :hover {
    color: var(--title-color);
    transition: 0.5s;
  }
`;

export const SideMenu = styled.div`
  display: flex;
`;

export const ThemeButton = styled.button`
  background-color: var(--hover-color);
  border-radius: 100%;
  width: 32px;
  height: 32px;

  svg {
    color: var(--font-light-color);
    margin: 0.4rem;
    font-size: 1.25rem;
  }
`;

export const IconButton = styled(MenuButton)`
  visibility: visible;
  margin-right: 1rem;

  svg {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 900px) {
    visibility: hidden;
  }
`;

export const List = styled(MenuList)`
  width: 50vw;
  height: 230px;
  background-color: ${(props) => props.theme.div.backgroundColor};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 250px;

  button {
    color: ${(props) => props.theme.button.color};
  }
`;

export const Item = styled(MenuItem)`
  padding-top: 1.5rem;
  padding-left: 1rem;
  height: 50px;

  svg {
    margin-right: 0.8rem;
  }

  :hover {
    color: var(--hover-color);
  }
`;
