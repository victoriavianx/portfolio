import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers/index";
import { ChakraProvider } from "@chakra-ui/react";
import { themes } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Providers>
        <ChakraProvider theme={themes}>
          <App />
        </ChakraProvider>
      </Providers>
    </React.StrictMode>
  </BrowserRouter>
);
