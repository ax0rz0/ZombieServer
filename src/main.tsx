import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";
import "./styles/main.css";
import "./styles/dialog.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
