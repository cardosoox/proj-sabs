import { RECURSOS } from "../data/recursos.js";
import PageHero from "../components/PageHero.jsx";
import ResourceLink from "../components/ResourceLink.jsx";

export default function Recursos() {
  return (
    <>
      <PageHero
        title="Vídeos e podcasts"
        eyebrow="Aprender ao teu ritmo"
        icon="youtube"
        tone="salvia"
        intro={[
          "Aprender também pode ser simples e divertido! Aqui encontras vídeos e podcasts sobre gravidez, parto, amamentação, cuidados ao recém-nascido e recuperação após o parto.",
          "Podes consultar estes conteúdos ao teu ritmo, sempre que tiveres alguma dúvida ou quiseres aprender mais.",
        ]}
      />
      <div className="container section-sm">
        <div className="recurso-groups">
          {RECURSOS.map((g) => (
            <section className="recurso-group" key={g.title}>
              <h2 className="h3">{g.title}</h2>
              <div className="resource-grid">
                {g.links.map((id) => (
                  <ResourceLink key={id} id={id} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
