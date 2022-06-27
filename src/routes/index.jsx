import { Route, Switch } from "react-router-dom";
import { Container } from "./styles";
import Portfolio from "../pages/index";
import Home from "../pages/Home/home";
import Skills from "../pages/Skills/skills";
import Footer from "../components/Footer/footer";
import Projects from "../pages/Projects/projects";
import Contact from "../pages/Contact/contact";

const Router = () => {
  return (
    <Container>
      <Portfolio />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/skills"}>
          <Skills />
        </Route>
        <Route exact path={"/projetos"}>
          <Projects />
        </Route>
        <Route exact path={"/contato"}>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Container>
  );
};

export default Router;
