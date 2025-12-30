import React from "react";

export default function SmallDisplay({ model }) {
  return (
    <section className="panel panel--small" aria-label="Small display">
      <div className="panel__header">
        <span className="panel__title">RENDER VIEW</span>
      </div>

      <div className="card">
        <div className="card__frame">
          <img className="card__img" src={model.image} alt={model.title} />
        </div>

        <div className="card__meta">
          <div className="card__name">{model.title}</div>
          <div className="card__role">{model.subtitle}</div>
        </div>
      </div>
    </section>
  );
}
