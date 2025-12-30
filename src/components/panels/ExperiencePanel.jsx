import React, { useMemo } from "react";

export default function ExperiencePanel({
  data,
  selectedExperienceId,
  setSelectedExperienceId,
}) {
  const selected = useMemo(
    () => data.experience.find((e) => e.id === selectedExperienceId) || data.experience[0],
    [data.experience, selectedExperienceId]
  );

  return (
    <div className="exp">
      <div className="exp__list" role="list">
        {data.experience.map((e) => {
          const active = e.id === selectedExperienceId;
          return (
            <button
              key={e.id}
              type="button"
              className={"item item--wide " + (active ? "item--active" : "")}
              onClick={() => setSelectedExperienceId(e.id)}
              role="listitem"
            >
              <span className="item__title">{e.company}</span>
              <span className="item__sub">
                {e.role} • {e.dates}
              </span>
            </button>
          );
        })}
      </div>

      <div className="detail">
        <div className="detail__top">
          <span className="badge">Now</span>
          <span className="detail__title">{selected.company}</span>
        </div>
        <p className="detail__desc">
          {selected.role} • {selected.location} • {selected.dates}
        </p>
        <ul className="ul">
          {(selected.bullets || []).map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
