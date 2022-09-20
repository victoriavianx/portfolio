import { Switch, Route, useLocation } from "react-router-dom";
import Header from "../components/Header/header";
import Menu from "../components/Menu/menu";
import About from "../pages/About/about";
import Intro from "../pages/Intro/intro";
import Projects from "../pages/Projects/projects";
import Skills from "../pages/Skills/skills";
import Footer from "../components/Footer/footer";
import { Container } from "./styles";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const location = useLocation();

  return (
    <Container>
      <Header />
      <Menu />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path={"/"}>
            <Intro />
          </Route>
          <Route exact path={"/sobre"}>
            <About />
          </Route>
          <Route exact path={"/skills"}>
            <Skills />
          </Route>
          <Route exact path={"/projetos"}>
            <Projects />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </Container>
  );
};

export default Routes;
