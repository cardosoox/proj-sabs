import { LINKS } from "../data/links.js";
import Icon from "./Icon.jsx";

const TYPE_LABEL = {
  site: "Site",
  pdf: "PDF",
  podcast: "Podcast",
  youtube: "Vídeo",
};

// Podcast disponível em várias plataformas: um cartão, um botão por plataforma.
function PodcastCard({ link }) {
  return (
    <div className="resource resource-podcast resource-multi">
      <div className="resource-row">
        <span className="resource-icon">
          <Icon name="podcast" />
        </span>
        <span className="resource-body">
          <span className="resource-title">{link.title}</span>
          <span className="resource-meta">{link.source}</span>
        </span>
      </div>
      <div className="platforms">
        {link.platforms.map((p) => (
          <a
            key={p.name}
            className="platform-btn"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ouvir “${link.title}” no ${p.name} (abre numa nova janela)`}
          >
            {p.name}
            <Icon name="external" size={15} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ResourceLink({ id }) {
  const link = LINKS[id];
  if (!link) return null;
  if (link.platforms) return <PodcastCard link={link} />;
  return (
    <a
      className={`resource resource-${link.type}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="resource-icon">
        <Icon name={link.type} />
      </span>
      <span className="resource-body">
        <span className="resource-title">{link.title}</span>
        <span className="resource-meta">
          {TYPE_LABEL[link.type]} · {link.source}
        </span>
      </span>
      <Icon name="external" size={18} className="resource-ext" />
      <span className="sr-only"> (abre numa nova janela)</span>
    </a>
  );
}

export function ResourceList({ ids, title = "Saber mais" }) {
  if (!ids?.length) return null;
  return (
    <div className="resources">
      <p className="resources-title">{title}</p>
      <div className="resource-grid">
        {ids.map((id) => (
          <ResourceLink key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
