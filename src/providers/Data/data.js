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
  };

  return (
    <DataContext.Provider value={{ database }}>{children}</DataContext.Provider>
  );
};
