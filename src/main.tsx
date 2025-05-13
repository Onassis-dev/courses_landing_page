import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./routes/index.tsx";
import Header from "./components/Header.tsx";

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Header />
      <App />
    </StrictMode>
  );
}
