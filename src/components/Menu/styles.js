import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  background-color: var(--hover-color);
  width: 90%;
  border-radius: 4rem;
  padding: 1rem 2.25rem;
  max-width: 678px;
  margin: 1rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      a {
        display: flex;
        color: #fde6ff;
        font-size: 1.25rem;
        padding: 0.4rem;
        border-radius: 5rem;

        :hover {
          background-color: #240e61;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    top: 15rem;
    right: 1rem;
    width: 50px;
    height: 450px;
    margin: 0 0.5rem 0 0;

    ul {
      width: 5rem;
      height: 400px;
      padding-right: 5rem;
      flex-direction: column;
    }
  }

  @media (min-width: 1440px) {
    margin: 0 10rem 0 0;
  }
`;
