import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";

export const NAV = [
  { to: "/gravidez", label: "Gravidez" },
  { to: "/cuidar-de-mim", label: "Cuidar de mim" },
  { to: "/saude-emocional", label: "Emoções" },
  { to: "/videos-e-podcasts", label: "Vídeos" },
];

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Maternidade com Carinho, página inicial">
      <span className="logo-mark">
        <Icon name="heart" stroke={2} />
      </span>
      <span className="logo-text">Maternidade com Carinho</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} size={24} stroke={2} />
          <span>{open ? "Fechar" : "Menu"}</span>
        </button>

        <nav
          id="menu-principal"
          className={`main-nav${open ? " is-open" : ""}`}
          aria-label="Navegação principal"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary btn-sm" to="/contactos">
            <Icon name="phone" size={18} />
            Contactos
          </Link>
        </nav>
      </div>
    </header>
  );
}
