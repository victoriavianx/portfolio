import Header from "../components/Header/header";
import Menu from "../components/Menu/menu";
import Footer from "../components/Footer/footer";
import Intro from "./Intro/intro";
import About from "./About/about";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";
import { Container } from "./styles";

const Portfolio = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Portfolio;
