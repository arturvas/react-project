// react = biblioteca

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./global.css";

// sessao dinamica, div que vai ser o container,
// chama o render e em baixo o conteudo do react
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
