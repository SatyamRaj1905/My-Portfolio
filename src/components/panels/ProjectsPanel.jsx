import React, { useMemo } from "react";

export default function ProjectsPanel({ data, selectedProjectId, setSelectedProjectId }) {
  const selected = useMemo(
    () => data.projects.find((p) => p.id === selectedProjectId) || data.projects[0],
    [data.projects, selectedProjectId]
  );

  return (
    <div className="projects">
      <div className="projects__grid" role="list">
        {data.projects.map((p) => {
          const active = p.id === selectedProjectId;
          return (
            <button
              key={p.id}
              className={"item " + (active ? "item--active" : "")}
              onClick={() => setSelectedProjectId(p.id)}
              type="button"
              role="listitem"
            >
              <span className="item__title">{p.title}</span>
              <span className="item__sub">{p.tech.join(" • ")}</span>
            </button>
          );
        })}
      </div>

      <div className="detail">
        <div className="detail__top">
          <span className="badge">Selected</span>
          <span className="detail__title">{selected.title}</span>
        </div>
        <p className="detail__desc">{selected.desc}</p>

        <ul className="ul">
          {(selected.bullets || []).map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="detail__actions">
          {selected.link ? (
            <a className="pixel-btn" href={selected.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          ) : (
            <span className="muted">Add your project link in src/data.js → projects[].link</span>
          )}
        </div>
      </div>
    </div>
  );
}
