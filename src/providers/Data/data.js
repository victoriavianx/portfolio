import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const database = {
    name: "Victoria Viana",
    career: "Desenvolvedora Web",
    aboutMe: [
      "Tenho 20 anos e sou uma pessoa que caiu de paraquedas na área de TI, especificamente na programação web.",
      "Sempre estive em contato com a tecnologia, seja através de jogos ou simplesmente fazendo buscas na internet, mas nunca fui além disso. Graças a minha curiosidade e vontade de saber o porquê das coisas, cá estou inserida nesse meio tecnológico e inovador.",
      "Iniciei meus estudos sobre desenvolvimento web no final do ano passado e desde então não parei mais, venho desenvolvendo habilidades técnicas e também habilidades pessoais - me sinto mais comunicativa, mais motivada e tenho mais autonomia na hora de aprender.",
    ],
    code: {
      frontend: [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Styled-Components",
        "Chakra UI",
      ],
      backend: [
        "NodeJS",
        "Express",
        "TypeScript",
        "Python",
        "Django",
        "PostgreSQL",
      ],
    },
    projects: [
      {
        name: "Nukenzie",
        description:
          "Nukenzie é um projeto simples para simular a organização de sua vida financeira. O projeto tem uma interface descomplicada e limpa, além de ser responsiva, é fácil de utilizar.",
        tools: ["JavaScript", "ReactJS", "Styled-Components"],
        github: "https://github.com/victoriavianx/projeto-nukenzie",
        application: "https://nukenzie.netlify.app/",
      },
      {
        name: "Kenziehub",
        description:
          "Kenziehub é um projeto para anotar as tecnologias que o usuário está aprendendo, podendo atualizar o status do aprendizado ou excluir a tecnologia.",
        tools: ["ReactJS", "React Hook Form/Yup", "Axios", "Styled-Components"],
        github: "https://github.com/victoriavianx/projeto-kenziehub",
        application: "https://kenzie-hub.netlify.app/",
      },
      {
        name: "Burguer",
        description:
          "Burguer é um projeto aspirante a ecommerce de hamburgueres, o usuário consegue adicionar produtos no carrinho, excluí-los e aumentar e/ou diminuir a quantidade do produto, além de conseguir pesquisar pelos produtos por nome, categoria.",
        tools: [
          "ReactJS",
          "ContextAPI",
          "Axios",
          "Styled-Components",
          "Chakra UI",
        ],
        github: "https://github.com/victoriavianx/projeto-hamburgueria",
        application: "https://vic-burguer.netlify.app/",
      },
      {
        name: "CRUD: Usuário",
        description:
          "Este projeto é uma API básica que permite a criação, listagem, atualização e deleção de usuário, além de logar o usuário.",
        tools: ["NodeJS", "Express", "Bcryptjs", "JWT", "Uuid", "Yup"],
        github: "https://github.com/victoriavianx/crud-usuario",
        application: "https://victoriavianx.github.io/crud-usuario-doc/",
      },
      {
        name: "TypeScript: CRUD de Usuário",
        description:
          "Este projeto foi um avanço em relação a criação de uma API CRUD comum. A criação da API dessa vez foi Express com TypeScript. A API permite a criação, listagem, atualização e deleção de usuário.",
        tools: ["NodeJS", "Express", "TypeScript", "TypeORM", "PostgreSQL"],
        github: "https://github.com/victoriavianx/crud-ts",
        application: "https://victoriavianx.github.io/crud-ts-doc/",
      },
      {
        name: "Komercio",
        description:
          "Komercio é um projeto que simula a API para um site de compra e venda.",
        tools: [
          "Python",
          "Django",
          "Django Rest-Framework",
          "PostgreSQL",
          "Heroku",
        ],
        github: "https://github.com/victoriavianx/komercio",
        application: "https://komercio-api.herokuapp.com/api/docs/",
      },
    ],
  };

  return (
    <DataContext.Provider value={{ database }}>{children}</DataContext.Provider>
  );
};
