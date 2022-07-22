import { useContext } from "react";
import { DataContext } from "../../providers/Data/data";
import { BoxTechs, Container, Content } from "./styles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Skills = () => {
  const { database } = useContext(DataContext);
  const { code } = database;
  const { frontend, backend } = code;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container id="skills">
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
    </motion.div>
  );
};

export default Skills;
