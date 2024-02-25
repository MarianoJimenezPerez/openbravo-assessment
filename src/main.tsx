import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./styles/styles.scss";
import { TodoProvider } from "./context/TodoContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <Home />
    </TodoProvider>
  </React.StrictMode>
);
