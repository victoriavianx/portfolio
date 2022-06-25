// import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { Container, Content, Menu } from "./styles";

const Footer = () => {
  // const linkedin = "https://linkedin.com/in/victoriavianx/";
  // const github = "https://github.com/victoriavianx";
  // const instagram = "https://instagram.com/ipsaluna";

  return (
    <Container>
      <Content>
        <h1>{"< Victoria />"}</h1>
        {/* <Menu>
          <li>
            <a href={linkedin}>
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href={github}>
              <BsGithub />
            </a>
          </li>
          <li>
            <a href={instagram}>
              <BsInstagram />
            </a>
          </li>
        </Menu> */}
        <span>
          Feito com <FcLike /> por Victoria Viana
        </span>
      </Content>
    </Container>
  );
};

export default Footer;
