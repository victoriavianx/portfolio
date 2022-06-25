import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
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

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

export const Content = styled.div`
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
    width: 10rem;
    height: 10rem;
    border-radius: 100px;
  }
`;

export const TextField = styled.div`
  width: 80%;
  margin: 3rem 0;
  max-width: 768px;
`;

export const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
  margin: 0.5rem;
`;
