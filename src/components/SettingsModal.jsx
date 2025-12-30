import React from "react";

const THEMES = [
  { id: "classic", name: "Classic Green" },
  { id: "mint", name: "Mint Pop" },
  { id: "midnight", name: "Midnight" },
];

export default function SettingsModal({ open, onClose, theme, setTheme }) {
  if (!open) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Settings">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel">
        <div className="modal__header">
          <div className="modal__title">Settings</div>
          <button type="button" className="icon-btn icon-btn--square" onClick={onClose} aria-label="Close settings">
            <span className="pixel-icon pixel-icon--close" aria-hidden="true" />
          </button>
        </div>

        <div className="modal__section">
          <div className="modal__label">Theme:-</div>

          <div className="theme-grid" role="radiogroup" aria-label="Theme selection">
            {THEMES.map((t) => {
              const active = t.id === theme;
              return (
                <button
                  key={t.id}
                  type="button"
                  className={"theme-chip " + (active ? "theme-chip--active" : "")}
                  onClick={() => setTheme(t.id)}
                  role="radio"
                  aria-checked={active}
                >
                  <span className={"theme-chip__swatch theme-chip__swatch--" + t.id} aria-hidden="true">
                    {active ? <span className="theme-chip__check" /> : null}
                  </span>
                  <span className="theme-chip__name">{t.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="modal__section modal__section--audio">
          <div className="modal__label">Audio:-</div>
          <div className="audio-row">
            <span className="audio-row__text">OFF</span>
            <span className="pixel-icon pixel-icon--mute" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
