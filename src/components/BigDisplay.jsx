import React, { useMemo } from "react";
import BioPanel from "./panels/BioPanel";
import SkillsPanel from "./panels/SkillsPanel";
import ProjectsPanel from "./panels/ProjectsPanel";
import ExperiencePanel from "./panels/ExperiencePanel";
import AchievementsPanel from "./panels/AchievementsPanel";
import ContactPanel from "./panels/ContactPanel";

export default function BigDisplay({
  data,
  activeTab,
  selectedProjectId,
  setSelectedProjectId,
  selectedExperienceId,
  setSelectedExperienceId,
  selectedAchievementId,
  setSelectedAchievementId,
}) {
  const view = useMemo(() => {
    if (activeTab === "bio") return { title: "Bio", body: <BioPanel data={data} /> };
    if (activeTab === "skills") return { title: "Skills", body: <SkillsPanel data={data} /> };
    if (activeTab === "projects")
      return {
        title: "Projects",
        body: (
          <ProjectsPanel
            data={data}
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={setSelectedProjectId}
          />
        ),
      };
    if (activeTab === "experience")
      return {
        title: "Experience",
        body: (
          <ExperiencePanel
            data={data}
            selectedExperienceId={selectedExperienceId}
            setSelectedExperienceId={setSelectedExperienceId}
          />
        ),
      };
    if (activeTab === "achievements")
      return {
        title: "Achievements",
        body: (
          <AchievementsPanel
            data={data}
            selectedAchievementId={selectedAchievementId}
            setSelectedAchievementId={setSelectedAchievementId}
          />
        ),
      };
    return { title: "Contact", body: <ContactPanel data={data} /> };
  }, [
    activeTab,
    data,
    selectedProjectId,
    setSelectedProjectId,
    selectedExperienceId,
    setSelectedExperienceId,
    selectedAchievementId,
    setSelectedAchievementId,
  ]);

  return (
    <section className="panel panel--big" data-big-display aria-label="Big display">
      <div className="panel__header">
        <span className="panel__title">DATA VIEW</span>
      </div>
      <div className="screen">
        <h2 className="screen__heading">{view.title}</h2>
        <div className="screen__body">{view.body}</div>
      </div>
    </section>
  );
}
