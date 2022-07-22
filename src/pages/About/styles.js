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
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.75rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  padding-bottom: 6rem;
  margin-top: 3rem;
`;

export const ImageBox = styled.figure`
  width: 12rem;
  height: 12rem;
  border: 4px solid var(--hover-color);
  border-style: dotted;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    filter: saturate(1.3);
    width: 10rem;
    height: 10rem;
    border-radius: 100px;
  }
`;

export const TextField = styled.div`
  width: 80%;
  margin: 3rem 0;
  max-width: 768px;

  @media (max-width: 768px) {
    max-width: 678px;
  }
`;

export const Text = styled.p`
  font-size: 0.95rem;
  text-align: justify;
  margin: 0.5rem;

  @media (min-width: 426px) {
    font-size: 1rem;
  }
`;
