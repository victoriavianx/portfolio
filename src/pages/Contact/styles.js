import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  div {
    h1 {
      font-size: 1rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const ConstructIcon = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    margin: 0 0.5rem 0 0;
    font-size: 1.5rem;
  }
`;
