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
  margin-bottom: 2rem;
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 768px;

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

export const BoxTechs = styled.div`
  margin-top: 3rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  max-width: 768px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  width: 80vw;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.border.color};
  border-radius: 8px;
  max-width: 340px;
  max-height: 340px;

  h3 {
    margin: 1rem 3.5rem;
    font-size: 1rem;
    text-align: center;
    background-color: var(--background-dark-mode);
  }

  ul {
    margin-bottom: 1rem;

    li {
      font-size: 0.9rem;
      margin: 1rem;
      display: flex;
      align-items: center;

      svg {
        margin: 0 1rem;
        color: var(--title-color);
      }
    }
  }

  @media (min-width: 768px) {
    ul {
      li {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 948px) {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    h3 {
      height: 9px;
    }

    ul {
      li {
        margin-top: 1.2rem;
      }
    }
  }
`;
