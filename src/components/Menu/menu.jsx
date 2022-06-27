import { FiHome, FiUser, FiBook, FiMessageSquare } from "react-icons/fi";
import { BiBriefcase } from "react-icons/bi";
import { Container } from "./styles";
import { Link } from "react-router-dom";
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
        {/* <li>
          <HashLink to={"#sobre"}>
            <FiUser />
          </HashLink>
        </li> */}
        <li>
          <Link to={"skills"}>
            <FiBook />
          </Link>
        </li>
        <li>
          <Link to={"projetos"}>
            <BiBriefcase />
          </Link>
        </li>
        <li>
          <Link to={"contato"}>
            <FiMessageSquare />
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
