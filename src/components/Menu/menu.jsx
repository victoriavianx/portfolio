import {
  FiHome,
  FiUser,
  FiBook,
  FiMessageSquare,
  FiPaperclip,
} from "react-icons/fi";
import { BiBriefcase } from "react-icons/bi";
import { Container } from "./styles";
//import { Link } from "react-router-dom";
import Curriculum from "../../assets/Currículo - Victoria Viana Garcia.pdf";
import { HashLink } from "react-router-hash-link";

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <HashLink to={"/#"}>
            <FiHome />
          </HashLink>
        </li>
        <li>
          <HashLink to={"#sobre"}>
            <FiUser />
          </HashLink>
        </li>
        <li>
          <HashLink to={"#skills"}>
            <FiBook />
          </HashLink>
        </li>
        <li>
          <HashLink to={"#projetos"}>
            <BiBriefcase />
          </HashLink>
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
