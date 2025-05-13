import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./routes/index.tsx";
import Header from "./components/Header.tsx";

function getContactLink(
  text = "Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20el%20curso%20de%20programaci%C3%B3n%20web"
) {
  const contactLink = "https://wa.me/526642956883?text=" + text;
  return contactLink;
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Header getContactLink={getContactLink} />
      <App getContactLink={getContactLink} />
    </StrictMode>
  );
}
