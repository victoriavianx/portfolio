import styled from "styled-components";

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

export const ThemeButton = styled.button`
  background-color: var(--hover-color);
  border-radius: 100%;
  width: 32px;
  height: 32px;

  svg {
    color: var(--font-light-color);
    margin-top: 0.4rem;
    font-size: 1.25rem;
  }
`;
