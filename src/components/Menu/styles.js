import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  background-color: var(--hover-color);
  width: 90%;
  border-radius: 4rem;
  padding: 1rem 2.25rem;
  margin: 1rem;
  max-width: 370px;

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
          transition: 0.5s;
          background-color: var(--background-dark-mode);
        }

        :focus {
          background-color: var(--background-dark-mode);
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    top: 18rem;
    right: 1.5rem;
    width: 50px;
    height: 400px;
    margin: 0 0.5rem 0 0;

    ul {
      width: 5rem;
      height: 350px;
      padding-right: 5rem;
      flex-direction: column;
    }
  }

  @media (min-width: 1024px) {
    top: 9.5rem;
    right: 3rem;
    height: 370px;

    ul {
      height: 300px;
    }
  }

  @media (min-width: 1280px) {
    top: 15rem;
    right: 10rem;
  }

  @media (min-width: 1440px) {
    top: 17rem;
    right: 13rem;
  }
`;
