import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 90vh;
  max-height: 850px;
`;

export const Box = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  text-align: center;

  h1 {
    font-size: 1.75rem;
  }

  h3 {
    color: var(--font-light-color);
    font-weight: 500;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }
`;

export const SocialMedia = styled.div`
  position: absolute;
  bottom: 15rem;
  left: 1.5rem;
  display: grid;
  row-gap: 0.5rem;

  svg {
    margin: 0.5rem 0;
    font-size: 1.3rem;
    color: var(--hover-color);

    :hover {
      color: var(--background-light-mode);
      transition: 0.5s;
    }
  }

  ::after {
    content: "";
    margin-top: 1rem;
    width: 40px;
    height: 2px;
    background-color: var(--hover-color);
    transform: rotate(90deg) translate(16px, 10px);
  }

  @media (min-width: 1440px) {
    margin-left: 15rem;
  }
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 47.5vw;

  svg {
    color: var(--hover-color);
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    left: 49vw;
  }
`;
