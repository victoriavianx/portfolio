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
    margin: 1rem 3.5rem;
    font-size: 1rem;
    text-align: center;
    background-color: var(--background-dark-mode);
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
