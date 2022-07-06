import {
  Box,
  Container,
  Content,
  ImageBox,
  Imagem,
  ScrollDown,
  SocialMedia,
} from "./styles";
import { FiChevronsDown } from "react-icons/fi";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { DataContext } from "../../providers/Data/data";
import Image from "../../assets/eu-fundo-removido.png";

const Intro = () => {
  const { database } = useContext(DataContext);
  const { name, career } = database;

  const linkedin = "https://linkedin.com/in/victoriavianx/";
  const github = "https://github.com/victoriavianx";
  const instagram = "https://instagram.com/ipsaluna";

  return (
    <Container>
      <Box>
        <Content>
          <span>Olá, meu nome é</span>
          <h1>{name}</h1>
          <h3>{career}</h3>

          <div>
            <ImageBox>{/* <Imagem src={Image} alt="eu" /> */}</ImageBox>
          </div>
        </Content>
      </Box>
      <div>
        <SocialMedia>
          <li>
            <a href={linkedin} target="_blank">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href={github} target="_blank">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href={instagram} target="_blank">
              <BsInstagram />
            </a>
          </li>
        </SocialMedia>
      </div>
      {/* <ScrollDown>
        <FiChevronsDown />
      </ScrollDown> */}
    </Container>
  );
};

export default Intro;
