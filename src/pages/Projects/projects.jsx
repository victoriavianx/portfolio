import { BoxTechs, Container, Content, Link } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import { DataContext } from "../../providers/Data/data";

const Projects = () => {
  const { database } = useContext(DataContext);
  const { projects } = database;

  return (
    <Container>
      <span>Works</span>
      <h3>Meus Projetos</h3>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={{ maxWidth: "768px", marginTop: "5rem" }}
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
              <div>
                <Link href={projeto.github} target="_blank">
                  Repositório
                </Link>
                <Link href={projeto.application} target="_blank">
                  Visitar
                </Link>
              </div>
            </Content>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Projects;
