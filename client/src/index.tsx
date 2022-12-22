import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.scss";
import { IoProvider } from "socket.io-react-hook";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <IoProvider>
    <App />
  </IoProvider>
);
