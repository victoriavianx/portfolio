import { BoxLink, BoxTechs, Container, Content, Link } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { useContext } from "react";
import { DataContext } from "../../providers/Data/data";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Projects = () => {
  const { database } = useContext(DataContext);
  const { projects } = database;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container id="projetos">
        <span>Works</span>
        <h3>Meus Projetos</h3>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          // style={{ maxWidth: "768px", marginTop: "5rem" }}
          className="swiperContainer"
        >
          {projects.map((projeto, index) => (
            <SwiperSlide key={index}>
              <Content>
                <h1>{projeto.name}</h1>
                <p>{projeto.description}</p>
                <BoxTechs>
                  {projeto.tools.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </BoxTechs>
                <BoxLink>
                  <Link href={projeto.github} target="_blank">
                    Repositório
                  </Link>
                  <Link href={projeto.application} target="_blank" Visit>
                    Visitar
                    <BsBoxArrowUpRight />
                  </Link>
                </BoxLink>
              </Content>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </motion.div>
  );
};

export default Projects;
