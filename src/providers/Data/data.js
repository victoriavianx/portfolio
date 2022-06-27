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
      backend: ["NodeJS", " Express", "PostgreSQL", "Docker"],
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
        application:
          "https://react-entrega-s2-kenzie-hub-victoriavianx.vercel.app/",
      },
    ],
  };

  return (
    <DataContext.Provider value={{ database }}>{children}</DataContext.Provider>
  );
};
