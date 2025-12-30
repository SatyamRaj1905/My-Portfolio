import React, { useEffect, useMemo, useState } from "react";
import { data } from "./data";
import LayoutShell from "./components/LayoutShell";
import SpeechBubble from "./components/SpeechBubble";
import Tabs from "./components/Tabs";
import SmallDisplay from "./components/SmallDisplay";
import BigDisplay from "./components/BigDisplay";
import SettingsModal from "./components/SettingsModal";

const TAB_ORDER = ["bio", "experience", "projects", "skills", "achievements", "contact"];

export default function App() {
  const [activeTab, setActiveTab] = useState("bio");
  const [selectedProjectId, setSelectedProjectId] = useState(data.projects[0]?.id || "");
  const [selectedExperienceId, setSelectedExperienceId] = useState(data.experience[0]?.id || "");
  const [selectedAchievementId, setSelectedAchievementId] = useState(data.achievements[0]?.id || "");

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("retro_theme") || "classic";
    } catch {
      return "classic";
    }
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedProject = useMemo(
    () => data.projects.find((p) => p.id === selectedProjectId) || data.projects[0],
    [selectedProjectId]
  );
  const selectedExperience = useMemo(
    () => data.experience.find((e) => e.id === selectedExperienceId) || data.experience[0],
    [selectedExperienceId]
  );
  const selectedAchievement = useMemo(
    () => data.achievements.find((a) => a.id === selectedAchievementId) || data.achievements[0],
    [selectedAchievementId]
  );
  // Theme: apply to <html> so CSS variables update everywhere.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("retro_theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);


  // Optional keyboard nav: ArrowUp/ArrowDown changes active tab; Enter re-focuses the big panel.
  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key;
      if (key !== "ArrowUp" && key !== "ArrowDown" && key !== "Enter") return;

      e.preventDefault();
      const idx = TAB_ORDER.indexOf(activeTab);
      if (key === "ArrowUp") {
        const next = TAB_ORDER[(idx - 1 + TAB_ORDER.length) % TAB_ORDER.length];
        setActiveTab(next);
      }
      if (key === "ArrowDown") {
        const next = TAB_ORDER[(idx + 1) % TAB_ORDER.length];
        setActiveTab(next);
      }
      if (key === "Enter") {
        const el = document.querySelector("[data-big-display]");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeTab]);

  const smallDisplayModel = useMemo(() => {
    if (activeTab === "bio") {
      return {
        image: data.profile.profileImage,
        title: data.profile.name,
        subtitle: data.profile.role,
      };
    }

    if (activeTab === "skills") {
      return { image: data.skills.image, title: "Skills", subtitle: "Toolbox" };
    }

    if (activeTab === "projects") {
      return {
        image: selectedProject?.image,
        title: selectedProject?.title || "Projects",
        subtitle: (selectedProject?.tech || []).slice(0, 3).join(" • "),
      };
    }

    if (activeTab === "experience") {
      return {
        image: selectedExperience?.logo,
        title: selectedExperience?.company || "Experience",
        subtitle: selectedExperience?.role || "",
      };
    }

    if (activeTab === "achievements") {
      return {
        image: selectedAchievement?.badgeImage,
        title: selectedAchievement?.title || "Achievements",
        subtitle: "Badges & milestones",
      };
    }

    return { image: data.contact.image, title: "Contact", subtitle: "Say hi" };
  }, [activeTab, selectedProject, selectedExperience, selectedAchievement]);

  return (
    <LayoutShell>
      <SpeechBubble text="Hello! Welcome to my web portfolio." />

      <div className="console">
        <div className="console__topbar">
          <div className="console__decor-left">
            <button
              type="button"
              className="icon-btn"
              onClick={() => setSettingsOpen(true)}
              aria-label="Open settings"
            >
              <span className="pixel-icon pixel-icon--gear" aria-hidden="true" />
            </button>

            {/* Mobile-only navigation button (replaces the old black square placeholder) */}
            <button
              type="button"
              className="icon-btn icon-btn--square icon-btn--hamburger icon-btn--hamburger-left"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="pixel-icon pixel-icon--menu" aria-hidden="true" />
            </button>
          </div>

          <div className="console__decor-right">
            <div className="dpad" title="Decorative D-pad" aria-hidden="true" />
          </div>
        </div>

        <div className="console__body">
          <Tabs activeTab={activeTab} onChange={setActiveTab} />

          {/* Mobile menu overlay */}
          {menuOpen ? (
            <div className="menu-modal" role="dialog" aria-modal="true" aria-label="Menu">
              <div className="menu-modal__backdrop" onClick={() => setMenuOpen(false)} />
              <div className="menu-modal__panel">
                <div className="menu-modal__header">
                  <div className="menu-modal__title">Menu</div>
                  <button
                    type="button"
                    className="icon-btn icon-btn--square"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <span className="pixel-icon pixel-icon--close" aria-hidden="true" />
                  </button>
                </div>
                <Tabs
                  activeTab={activeTab}
                  onChange={(id) => {
                    setActiveTab(id);
                    setMenuOpen(false);
                  }}
                />
              </div>
            </div>
          ) : null}

          <SmallDisplay model={smallDisplayModel} />

          <BigDisplay
            data={data}
            activeTab={activeTab}
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={setSelectedProjectId}
            selectedExperienceId={selectedExperienceId}
            setSelectedExperienceId={setSelectedExperienceId}
            selectedAchievementId={selectedAchievementId}
            setSelectedAchievementId={setSelectedAchievementId}
          />
        </div>
      </div>

      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        theme={theme}
        setTheme={setTheme}
      />

      <footer className="footer">
        <span className="footer__hint">Tip: ArrowUp / ArrowDown to change tabs • Enter to jump</span>
      </footer>
    </LayoutShell>
  );
}
