import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { TOPICS, getTopic } from "../data/topics.js";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import { ResourceList } from "../components/ResourceLink.jsx";

function scrollToId(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  el.focus({ preventScroll: true });
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function Section({ section, tone }) {
  return (
    <section className="topic-section" id={section.id} tabIndex={-1} aria-labelledby={`${section.id}-t`}>
      <h2 id={`${section.id}-t`}>{section.title}</h2>
      {section.text?.map((p, i) => (
        <p className="body-text" key={i}>
          {p}
        </p>
      ))}

      {section.lists?.length > 0 && (
        <div className={`list-grid${section.lists.length > 1 ? " list-grid-2" : ""}`}>
          {section.lists.map((list) => (
            <div className={`list-card tone-${tone}`} key={list.title}>
              <p className="list-title">{list.title}</p>
              <ul className="check-list">
                {list.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={18} stroke={2.2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {section.note && <p className="note">{section.note}</p>}

      {section.alert && (
        <div className="alert" role="note">
          <Icon name="alert" size={24} />
          <div>
            <p className="alert-title">{section.alert.title}</p>
            <p>{section.alert.text}</p>
            <div className="alert-actions">
              <a className="btn btn-alert btn-sm" href="tel:112">
                <Icon name="phone" size={18} /> Ligar 112
              </a>
              <a className="btn btn-outline btn-sm" href="tel:808242424">
                <Icon name="phone" size={18} /> SNS 24
              </a>
            </div>
          </div>
        </div>
      )}

      <ResourceList ids={section.links} />
    </section>
  );
}

export default function TopicPage({ slug }) {
  const topic = getTopic(slug);
  const ids = topic ? topic.sections.map((s) => s.id) : [];
  const active = useActiveSection(ids);

  if (!topic) return <Navigate to="/" replace />;

  const idx = TOPICS.indexOf(topic);
  const next = TOPICS[idx + 1]; // a última página não tem "Continuar a ler"

  return (
    <>
      <PageHero
        title={topic.title}
        eyebrow={topic.eyebrow}
        intro={topic.intro}
        tone={topic.tone}
        icon={topic.icon}
      />

      <div className="container topic-layout">
        <aside className="toc" aria-label="Nesta página">
          <p className="toc-title">Nesta página</p>
          <ol>
            {topic.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={active === s.id ? "is-active" : undefined}
                  aria-current={active === s.id ? "location" : undefined}
                  onClick={(e) => scrollToId(e, s.id)}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="topic-content">
          {topic.sections.map((s) => (
            <Section key={s.id} section={s} tone={topic.tone} />
          ))}

          {next && (
            <Link className={`next-card tone-${next.tone}`} to={`/${next.slug}`}>
              <span className="icon-box">
                <Icon name={next.icon} size={26} />
              </span>
              <span className="next-body">
                <span className="eyebrow">Continuar a ler</span>
                <span className="next-title">{next.title}</span>
              </span>
              <span className="next-arrow" aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
