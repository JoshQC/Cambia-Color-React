import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import { ColorProvider } from "./contexts/color";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
