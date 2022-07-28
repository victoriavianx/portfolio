import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromRight = keyframes`
from{
    opacity: 0;
    transform: translateX(50px)
}

to {
    opacity: 1;
    transform: translateX(0px)
}
`;

export const Container = styled.section`
  /* overflow-y: hidden;
  animation: ${appearFromRight} 1s; */
  width: 100%;
`;

export const Box = styled.div`
  padding-bottom: 10rem;
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
    color: ${(props) => props.theme.h3.color};
    font-weight: 500;
    font-size: 0.9rem;
  }

  div {
    margin: 4rem auto 0 auto;
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

export const ImageBox = styled.div`
  justify-self: center;
  width: 190px;
  height: 353px;
  background: linear-gradient(
    180deg,
    var(--hover-color),
    var(--background-dark-mode)
  );
  border-radius: 1rem 1rem 0.5rem 0.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 240px;
    height: 453px;
  }

  @media (min-width: 1440px) {
    transform: translateY(0px);
    animation: float 5s ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-30px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
`;

export const Imagem = styled.img`
  width: 190px;
  filter: saturate(1.3);

  @media (min-width: 768px) {
    width: 240px;
  }
`;

export const SocialMedia = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 1.5rem;
  display: grid;
  row-gap: 0.5rem;

  svg {
    margin: 0.5rem 0;
    font-size: 1.3rem;
    color: var(--hover-color);

    :hover {
      color: ${(props) => props.theme.svg.color};
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

  @media (min-width: 390px) {
    left: 2rem;
    bottom: 12rem;
  }

  @media (min-width: 768px) {
    bottom: 15rem;
    left: 3.5rem;

    svg {
      font-size: 1.5rem;
    }

    ::after {
      width: 45px;
    }
  }

  @media (min-width: 770px) {
    left: 4rem;
    top: 30rem;
  }

  @media (min-width: 1200px) {
    left: 12rem;
  }

  @media (min-width: 1440px) {
    left: 18rem;
  }

  @media (min-width: 1632px) {
    margin-left: 5rem;
  }

  @media (min-width: 1700px) {
    margin-left: 10rem;
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
