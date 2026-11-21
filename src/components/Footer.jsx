import { Link } from "react-router-dom";
import { NAV } from "./Header.jsx";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <p className="footer-brand">Maternidade com Carinho</p>
            <p className="footer-tagline">Cuidar de ti também é cuidar do teu bebé.</p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="footer-nav">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contactos">Contactos úteis</Link>
              </li>
            </ul>
          </nav>

          <div className="footer-help">
            <a href="tel:112" className="footer-phone">
              <Icon name="alert" size={18} />
              <span><strong>112</strong> Emergência</span>
            </a>
            <a href="tel:808242424" className="footer-phone">
              <Icon name="phone" size={18} />
              <span><strong>808 24 24 24</strong> SNS 24</span>
            </a>
          </div>
        </div>

        <p className="footer-note">
          A informação deste site não substitui o acompanhamento de um profissional de saúde.
        </p>
      </div>
    </footer>
  );
}
