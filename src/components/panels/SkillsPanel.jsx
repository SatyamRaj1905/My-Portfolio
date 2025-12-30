import React from "react";

function twoCol(items = []) {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export default function SkillsPanel({ data }) {
  return (
    <div className="skills">
      {data.skills.categories.map((c) => {
        const [a, b] = twoCol(c.items);
        return (
          <div className="skills__block" key={c.title}>
            <h3 className="skills__title">{c.title}</h3>
            <div className="skills__cols">
              <ul className="ul">
                {a.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <ul className="ul">
                {b.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
