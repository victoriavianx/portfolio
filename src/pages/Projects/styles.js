import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 78vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  max-width: 768px;
`;

export const Content = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 578px;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    text-align: justify;
    margin-bottom: 0.3rem;
  }
`;

export const BoxTechs = styled.ul`
  display: flex;
  margin: 1rem 0;

  li {
    font-size: 0.8rem;
    margin: 0 0.5rem 0 0;
    padding: 0.3rem 0.5rem;
    border-radius: 50px;
    color: var(--font-dark-color);
    background-color: var(--title-color);
  }
`;

export const Link = styled.a`
  margin: 1rem 1rem 0 0;
  background-color: var(--hover-color);
`;
