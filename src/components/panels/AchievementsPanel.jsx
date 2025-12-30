import React, { useMemo } from "react";

export default function AchievementsPanel({
  data,
  selectedAchievementId,
  setSelectedAchievementId,
}) {
  const selected = useMemo(
    () => data.achievements.find((a) => a.id === selectedAchievementId) || data.achievements[0],
    [data.achievements, selectedAchievementId]
  );

  return (
    <div className="ach">
      <div className="ach__grid" role="list">
        {data.achievements.map((a) => {
          const active = a.id === selectedAchievementId;
          return (
            <button
              key={a.id}
              type="button"
              className={"item " + (active ? "item--active" : "")}
              onClick={() => setSelectedAchievementId(a.id)}
              role="listitem"
            >
              <span className="item__title">{a.title}</span>
              <span className="item__sub">Tap to preview badge</span>
            </button>
          );
        })}
      </div>

      <div className="detail">
        <div className="detail__top">
          <span className="badge">Badge</span>
          <span className="detail__title">{selected.title}</span>
        </div>
        <p className="detail__desc">{selected.desc}</p>
        <p className="muted"></p>
      </div>
    </div>
  );
}
