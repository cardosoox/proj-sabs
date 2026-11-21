import { Link } from "react-router-dom";
import { TOPICS } from "../data/topics.js";
import Icon from "../components/Icon.jsx";
import ResourceLink from "../components/ResourceLink.jsx";

function scrollToTemas(e) {
  e.preventDefault();
  document.getElementById("temas")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Gravidez · Pós-parto · Saúde emocional</p>
            <h1>
              Ninguém devia viver a maternidade <em>sozinha.</em>
            </h1>
            <p className="lead">
              Informação sobre a gravidez, a recuperação após o parto e a saúde emocional.
              Porque cuidar de ti também é cuidar do teu bebé.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="#temas" onClick={scrollToTemas}>
                Começar a explorar <span aria-hidden="true">→</span>
              </a>
              <Link className="btn btn-outline" to="/contactos">
                Contactos úteis
              </Link>
            </div>
          </div>

          <div className="hero-media">
            <span className="hero-circle" aria-hidden="true"></span>
            <img
              className="hero-img"
              src="img/hero.jpg"
              alt="Mãe sentada num sofá, de olhos fechados e a sorrir, com o bebé recém-nascido a dormir ao colo"
              width="452"
              height="678"
            />
            <div className="float-card">
              <span className="float-icon">
                <Icon name="message" />
              </span>
              <p>Dúvidas sem julgamentos, respostas com tempo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ajuda rápida */}
      <section className="help-strip" aria-labelledby="ajuda-t">
        <div className="container help-inner">
          <p id="ajuda-t" className="help-title">
            Precisas de ajuda agora?
          </p>
          <div className="help-items">
            <a className="help-item" href="tel:112">
              <span className="help-icon help-icon-alert">
                <Icon name="alert" />
              </span>
              <span>
                <strong>112</strong>
                <small>Emergência médica, 24h</small>
              </span>
            </a>
            <a className="help-item" href="tel:808242424">
              <span className="help-icon">
                <Icon name="phone" />
              </span>
              <span>
                <strong>808 24 24 24</strong>
                <small>SNS 24, também para grávidas</small>
              </span>
            </a>
            <a className="help-item" href="tel:808242424">
              <span className="help-icon">
                <Icon name="message" />
              </span>
              <span>
                <strong>Opção 4</strong>
                <small>Aconselhamento psicológico</small>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Temas */}
      <section id="temas" className="section section-white">
        <div className="container">
          <div className="section-head">
            <h2>Um caminho, várias fases. Estamos em todas.</h2>
            <p className="section-intro">
              Escolhe onde estás agora e encontra o que precisas para esse momento.
            </p>
          </div>

          <div className="cards-3 cards-4">
            {TOPICS.map((t) => (
              <Link key={t.slug} className={`fase-card tone-${t.tone}`} to={`/${t.slug}`}>
                <span className="icon-box">
                  <Icon name={t.icon} size={26} />
                </span>
                <span className="eyebrow">{t.eyebrow}</span>
                <h3>{t.title}</h3>
                <p>{t.summary}</p>
                <span className="read-more">
                  Ler mais <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
            <Link className="fase-card tone-verde" to="/videos-e-podcasts">
              <span className="icon-box">
                <Icon name="youtube" size={26} />
              </span>
              <span className="eyebrow">Aprender ao teu ritmo</span>
              <h3>Vídeos e podcasts</h3>
              <p>
                Conteúdos sobre gravidez, parto, amamentação, recém-nascido e recuperação após o
                parto.
              </p>
              <span className="read-more">
                Ver e ouvir <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Guia para grávidas */}
      <section className="section">
        <div className="container">
          <div className="feature-block">
            <div className="feature-text">
              <p className="eyebrow">Recurso recomendado</p>
              <h2>Guia para Grávidas</h2>
              <p className="body-text">
                Tudo o que precisa de saber sobre a sua gravidez, disponibilizado pela Unidade
                Local de Saúde da Região de Leiria. Reúne informações e orientações importantes
                para te ajudar a compreender as diferentes etapas da gravidez e a esclarecer
                algumas das dúvidas que podem surgir.
              </p>
            </div>
            <div className="feature-link">
              <ResourceLink id="guiaGravidas" />
            </div>
          </div>
        </div>
      </section>

      {/* Mensagem para a mãe */}
      <section className="quote-band" aria-labelledby="mensagem-t">
        <div className="container quote-inner">
          <Icon name="heart" size={40} stroke={1.6} className="quote-heart" />
          <h2 id="mensagem-t" className="quote-heading">
            Não te esqueças de ti, mãe!
          </h2>
          <div className="quote-body">
            <p>
              A maternidade é uma caminhada feita de amor, descobertas, desafios e aprendizagens.
            </p>
            <p>
              Haverá dias mais fáceis e outros mais difíceis, momentos de alegria e momentos de
              insegurança. Não precisas de ter todas as respostas, nem de fazer tudo sozinha.
            </p>
            <p>
              Respeita o teu ritmo, cuida de ti, aceita ajuda e lembra-te de que também mereces
              atenção, carinho e compreensão.
            </p>
          </div>
          <p className="quote-big">
            Uma mãe cuidada também é uma mãe apoiada. Não estás sozinha!
          </p>
          <p className="eyebrow quote-sign">Maternidade com Carinho</p>
        </div>
      </section>
    </>
  );
}
