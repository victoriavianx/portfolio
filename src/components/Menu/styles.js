import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
    position: fixed;
    bottom: 1rem;
    background-color: var(--hover-color);
    width: 90%;
    border-radius: 4rem;
    padding: 1rem 2.25rem;
    margin: auto;
    margin-bottom: 2rem;
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
            background-color: rgba(255, 255, 255, 0.3);
            //background-color: var(--background-dark-mode);
          }

          :focus {
            background-color: var(--background-dark-mode);
          }
        }
      }
    }
  }
`;
