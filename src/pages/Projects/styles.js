import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 9rem;
  max-width: 768px;

  @media (min-width: 540px) {
    height: 68vh;
  }

  @media (min-width: 768px) {
    padding-top: 0;
    height: 65vh;
  }

  @media (min-width: 1024px) {
    height: 78vh;
  }
`;

export const Content = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 50vw;
  max-width: 538px;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    text-align: justify;
    margin-bottom: 0.3rem;
  }

  @media (min-width: 878px) {
    p {
      font-size: 1.1rem;
    }
  }
`;

export const BoxTechs = styled.ul`
  display: flex;
  margin: 1rem 0;
  flex-wrap: wrap;

  li {
    font-size: 0.8rem;
    margin: 0 0.5rem 0.5rem 0;
    padding: 0.3rem 0.5rem;
    border-radius: 50px;
    color: var(--font-dark-color);
    background-color: var(--title-color);
  }
`;

export const BoxLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
`;

export const Link = styled.a`
  width: 100px;
  font-size: 0.9rem;
  font-weight: var(--font-semibold);
  height: 30px;
  margin: 0 1rem 0 0;
  padding: ${(props) => (props.Visit ? "5px 5px 5px 5px" : "5px 5px")};
  border-radius: 5px;
  color: var(--font-light-mode);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  transition: 0.4s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  :hover {
    background-color: var(--title-color);
  }

  svg {
    display: none;
  }

  @media (min-width: 375px) {
    padding: ${(props) => (props.Visit ? "5px 5px 5px 15px" : "5px 5px")};
  }

  @media (min-width: 425px) {
    svg {
      display: unset;
      margin-left: 5px;
    }
  }

  @media (min-width: 578px) {
    padding: ${(props) => (props.Visit ? "5px 5px 5px 15px" : "5px 10px")};
    transition: transform 0.4s;

    :hover {
      transform: scale(1.1);
    }
  }
`;
