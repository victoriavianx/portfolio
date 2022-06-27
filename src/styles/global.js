/* Cores */
// .color1 { #8823e8 };
// .color2 { #a43eee };
// .color3 { #bf58f4 };
// .color4 { #db73f9 };
// .color5 { #f68dff };
// .color6 { #fde6ff };
// .color6 { #240e61 };

/* Fonte */
// font-family: 'Poppins', sans-serif;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    html {
        scroll-behavior: smooth;
    }

    body,
    button,
    input,
    textarea {
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
    }

    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.color};
        transition: .4s;
    }

    body::-webkit-scrollbar {
        width: 8px;
        transition: .4s;
    }

    body::-webkit-scrollbar-track {
        background: ${(props) => props.theme.backgroundColor};
        
    }

    body::-webkit-scrollbar-thumb {
        
        border-radius: 10px;
        background-color: var(--hover-color)
    }

    h1, h2, h3 {
        color: var(--title-color);
        font-weight: var(--font-semibold);
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    :root {
        --background-light-mode: #fde6ff;
        --background-dark-mode: #240e61;
        --font-light-color: #fde6ff;
        --font-dark-color: #240e61;
        --title-color: #b894fc;
        --hover-color: #8823e8;

        --body-font: 'Poppins', sans-serif;
        --font-medium: 500;
        --font-semibold: 600;
    }
`;
