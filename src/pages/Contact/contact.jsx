import { ConstructIcon, Container } from "./styles";
import { IoMdConstruct } from "react-icons/io";

const Contact = () => {
  return (
    <Container>
      <div>
        <h1>Em breve</h1>
        <ConstructIcon>
          <IoMdConstruct />
          <IoMdConstruct />
          <IoMdConstruct />
        </ConstructIcon>
        <h3>Página em construção</h3>
      </div>
    </Container>
  );
};

export default Contact;
