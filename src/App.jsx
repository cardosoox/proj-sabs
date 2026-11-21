import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import TopicPage from "./pages/TopicPage.jsx";
import Recursos from "./pages/Recursos.jsx";
import Contactos from "./pages/Contactos.jsx";
import { TOPICS } from "./data/topics.js";

const TITLES = {
  "/": "Maternidade com Carinho",
  "/videos-e-podcasts": "Vídeos e podcasts · Maternidade com Carinho",
  "/contactos": "Contactos úteis · Maternidade com Carinho",
  ...Object.fromEntries(TOPICS.map((t) => [`/${t.slug}`, `${t.title} · Maternidade com Carinho`])),
};

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLES[pathname] ?? TITLES["/"];
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <a className="skip-link" href="#conteudo" onClick={(e) => {
        e.preventDefault();
        document.getElementById("conteudo")?.focus();
      }}>
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          {TOPICS.map((t) => (
            <Route key={t.slug} path={`/${t.slug}`} element={<TopicPage slug={t.slug} />} />
          ))}
          <Route path="/videos-e-podcasts" element={<Recursos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
