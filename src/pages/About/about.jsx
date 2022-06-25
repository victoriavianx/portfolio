import { Container, Content, ImageBox, Text, TextField } from "./styles";
import Imagem from "../../assets/eu.png";
import { useContext } from "react";
import { DataContext } from "../../providers/Data/data";

const About = () => {
  const { database } = useContext(DataContext);
  const { aboutMe } = database;

  return (
    <Container id="sobre">
      <span>Intro</span>
      <h3>Sobre mim</h3>
      <Content>
        <div>
          <ImageBox>
            <img src={Imagem} alt="eu" />
          </ImageBox>
        </div>
        <TextField>
          {aboutMe.map((info, index) => (
            <Text key={index}>{info}</Text>
          ))}
        </TextField>
      </Content>
    </Container>
  );
};

export default About;
