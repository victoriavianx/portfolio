import { FiHome, FiUser, FiBook, FiPaperclip } from "react-icons/fi";
import { BiBriefcase } from "react-icons/bi";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import Curriculum from "../../assets/Currículo - Victoria Viana Garcia.pdf";
//import { HashLink } from "react-router-hash-link";

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to={"/"}>
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to={"/sobre"}>
            <FiUser />
          </Link>
        </li>
        <li>
          <Link to={"/skills"}>
            <FiBook />
          </Link>
        </li>
        <li>
          <Link to={"/projetos"}>
            <BiBriefcase />
          </Link>
        </li>
        {/* <li>
          <Link to={"contato"}>
            <FiMessageSquare />
          </Link>
        </li> */}
        <li>
          <a href={Curriculum} download>
            <FiPaperclip />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
