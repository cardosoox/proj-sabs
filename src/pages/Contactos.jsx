import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import ResourceLink from "../components/ResourceLink.jsx";

function Phone({ number, label, alert }) {
  return (
    <a className={`phone-link${alert ? " phone-alert" : ""}`} href={`tel:${number.replace(/\s/g, "")}`}>
      <Icon name="phone" size={20} />
      <span>
        <strong>{number}</strong>
        {label && <small>{label}</small>}
      </span>
    </a>
  );
}

export default function Contactos() {
  return (
    <>
      <PageHero
        title="Contactos úteis"
        eyebrow="Quem pode ajudar"
        icon="phone"
        tone="mel"
        intro={[
          "Números e serviços a que podes recorrer durante a gravidez, depois do parto e nos primeiros meses do bebé.",
        ]}
      />

      <div className="container section-sm">
        <div className="contact-grid">
          <article className="contact-card contact-card-alert">
            <span className="contact-icon"><Icon name="alert" /></span>
            <h2 className="h3">Emergência médica</h2>
            <p>Em situações de emergência, liga para o número europeu de emergência.</p>
            <Phone number="112" label="Disponível 24 horas por dia" alert />
          </article>

          <article className="contact-card">
            <span className="contact-icon"><Icon name="phone" /></span>
            <h2 className="h3">SNS 24</h2>
            <p>
              O SNS 24 disponibiliza aconselhamento e encaminhamento para os serviços de saúde
              adequados. Também dispõe de apoio específico para grávidas.
            </p>
            <Phone number="808 24 24 24" label="24 horas por dia, incluindo o apoio a grávidas" />
            <ResourceLink id="sns24Inicio" />
          </article>

          <article className="contact-card">
            <span className="contact-icon"><Icon name="message" /></span>
            <h2 className="h3">Apoio psicológico</h2>
            <p>
              Aconselhamento Psicológico do SNS 24. Este serviço telefónico gratuito funciona 24
              horas por dia. O atendimento é assegurado por psicólogos clínicos preparados para
              intervenção em crise, ansiedade aguda e orientação emocional.
            </p>
            <Phone number="808 24 24 24" label="Opção 4 · gratuito · 24h" />
          </article>

          <article className="contact-card">
            <span className="contact-icon"><Icon name="users" /></span>
            <h2 className="h3">Centro de saúde</h2>
            <p>
              O centro de saúde é um dos principais locais de acompanhamento da mãe e do bebé
              após o nascimento.
            </p>
          </article>
        </div>

        {/* Maternidade */}
        <article className="hospital">
          <div className="hospital-head">
            <span className="contact-icon"><Icon name="hospital" /></span>
            <div>
              <p className="eyebrow">Maternidade</p>
              <h2>Hospital de Leiria</h2>
              <p className="body-text">Unidade Local de Saúde da Região de Leiria · Obstetrícia e Ginecologia</p>
              <a
                className="btn btn-primary btn-sm hospital-site"
                href="https://www.ulsrl.min-saude.pt/especialidades-medicas/obstetricia-ginecologia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="site" size={18} />
                Ver o site do serviço
                <Icon name="external" size={16} />
                <span className="sr-only"> (abre numa nova janela)</span>
              </a>
            </div>
          </div>

          <div className="hospital-grid">
            <div className="hospital-col">
              <p className="list-title">Contactos e localização</p>
              <ul className="info-list">
                <li>
                  <Icon name="pin" size={20} />
                  <span>
                    <strong>Morada</strong>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rua+das+Olhalvas+Pousos+2410-197+Leiria"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rua das Olhalvas, Pousos, 2410-197 Leiria
                    </a>
                  </span>
                </li>
                <li>
                  <Icon name="phone" size={20} />
                  <span>
                    <strong>Telefone geral</strong>
                    <span>
                      <a href="tel:244817014">244 817 014</a> / <a href="tel:244817000">244 817 000</a>
                    </span>
                  </span>
                </li>
                <li>
                  <Icon name="phone" size={20} />
                  <span>
                    <strong>Urgência Ginecológica / Obstétrica</strong>
                    <span>
                      <a href="tel:244817015">244 817 015</a> (atendimento permanente 24h)
                    </span>
                  </span>
                </li>
                <li>
                  <Icon name="mail" size={20} />
                  <span>
                    <strong>Email</strong>
                    <a href="mailto:sec.urgobst@ulsrl.min-saude.pt">sec.urgobst@ulsrl.min-saude.pt</a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="hospital-col">
              <p className="list-title">Horários e funcionamento</p>
              <ul className="info-list">
                <li>
                  <Icon name="clock" size={20} />
                  <span>
                    <strong>Consulta Externa</strong>
                    <span>8h30 às 17h30 (dias úteis)</span>
                  </span>
                </li>
                <li>
                  <Icon name="clock" size={20} />
                  <span>
                    <strong>Serviço de Urgência Ginecológica / Obstétrica (SUGO)</strong>
                    <span>24 horas por dia</span>
                  </span>
                </li>
                <li>
                  <Icon name="clock" size={20} />
                  <span>
                    <strong>Bloco de Partos</strong>
                    <span>24 horas por dia</span>
                  </span>
                </li>
                <li>
                  <Icon name="users" size={20} />
                  <span>
                    <strong>Direção do Serviço</strong>
                    <span>Dra. Andreia Antunes</span>
                  </span>
                </li>
              </ul>
              <p className="note">
                Antes de te deslocares à urgência, é aconselhado contactar o SNS 24 (808 24 24 24)
                para o devido encaminhamento.
              </p>
            </div>
          </div>
        </article>

        {/* Parentalidade */}
        <section className="parentalidade">
          <h2 className="h3">Apoio à parentalidade</h2>
          <div className="resource-grid">
            <ResourceLink id="segSocialDireta" />
            <ResourceLink id="segSocialParental" />
          </div>
        </section>
      </div>
    </>
  );
}
