import { useContext } from "react";
import { DataContext } from "../../providers/Data/data";
import { BoxTechs, Container, Content } from "./styles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Skills = () => {
  const { database } = useContext(DataContext);
  const { code } = database;
  const { frontend, backend } = code;

  return (
    <Container>
      <span>Conhecimento</span>
      <h3>Minhas Habilidades</h3>
      <BoxTechs>
        <Content>
          <h3>Desenvolvimento Frontend</h3>
          <ul>
            {frontend.map((tech, index) => (
              <li key={index}>
                <BsFillArrowRightCircleFill />
                {tech}
              </li>
            ))}
          </ul>
        </Content>
        <Content>
          <h3>Desenvolvimento Backend</h3>
          <ul>
            {backend.map((tech, index) => (
              <li key={index}>
                <BsFillArrowRightCircleFill />
                {tech}
              </li>
            ))}
          </ul>
        </Content>
      </BoxTechs>
    </Container>
  );
};

export default Skills;
