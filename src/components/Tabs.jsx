import React from "react";

const TABS = [
  { id: "bio", label: "Bio", icon: "bio" },
  { id: "experience", label: "Experience", icon: "exp" },
  { id: "projects", label: "Projects", icon: "projects" },
  { id: "skills", label: "Skills", icon: "skills" },
  { id: "achievements", label: "Achievements", icon: "trophy" },
  { id: "contact", label: "Contact", icon: "contact" },
];

export default function Tabs({ activeTab, onChange }) {
  return (
    <nav className="tabs" aria-label="Portfolio sections">
      {TABS.map((t) => {
        const active = t.id === activeTab;
        return (
          <button
            key={t.id}
            type="button"
            className={"tab " + (active ? "tab--active" : "")}
            onClick={() => onChange(t.id)}
            aria-current={active ? "page" : undefined}
          >
            <span className={"tab__icon tab__icon--" + t.icon} aria-hidden="true" />
            <span className="tab__label">{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
