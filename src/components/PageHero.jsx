import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function PageHero({ title, eyebrow, intro = [], tone = "rosa", icon }) {
  return (
    <section className={`page-hero tone-${tone}`}>
      <div className="container page-hero-inner">
        <nav className="breadcrumb" aria-label="Estás aqui">
          <Link to="/">Início</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <div className="page-hero-head">
          {icon && (
            <span className="icon-box icon-box-lg">
              <Icon name={icon} size={30} />
            </span>
          )}
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
        </div>
        {intro.map((p, i) => (
          <p className="page-hero-intro" key={i}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
