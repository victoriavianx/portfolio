import styled from "styled-components";

export const Container = styled.section`
  margin-top: 4rem;
  width: 100%;
  height: 100vh;
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
  width: 90vw;
  display: flex;
  flex-direction: column;
  max-width: 768px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  width: 90vw;
  height: 40vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #fde6ff;
  border-radius: 8px;
  max-width: 340px;
  max-height: 340px;

  h3 {
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
  }

  ul {
    li {
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
  }
`;
