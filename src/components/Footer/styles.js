import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 2rem;
  position: static;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--title-color);

  span {
    color: ${(props) => props.theme.span.color};
  }

  @media (max-width: 320px) {
    margin-top: 15rem;
  }

  @media (min-width: 500px) {
    span {
      display: unset;
      margin: auto;
      font-size: 0.85rem;
      color: ${(props) => props.theme.span.color};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1024px;

  h1 {
    margin: auto;
    font-size: 0.6rem;
    color: ${(props) => props.theme.h1.color};
    font-weight: var(--font-medium);
    letter-spacing: 2px;
  }

  span {
    font-size: 0.6rem;
    margin: auto;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    a {
      color: var(--font-dark-color);

      svg {
        font-size: 1.5rem;
        margin: 0.8rem;
      }
    }
  }
`;
