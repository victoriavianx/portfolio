import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 5rem;
  position: static;
  bottom: 0;
  width: 100%;
  height: 250px;
  background-color: #db73f9;

  span {
    color: var(--font-dark-color);
  }

  @media (max-width: 320px) {
    margin-top: 15rem;
  }

  @media (min-width: 500px) {
    span {
      display: unset;
      margin: auto;
      font-size: 0.85rem;
      color: var(--font-dark-color);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;

  h1 {
    margin: 5rem 3rem 2rem 3rem;
    font-size: 1rem;
    color: var(--font-dark-color);
    font-weight: var(--font-medium);
    letter-spacing: 2px;
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
