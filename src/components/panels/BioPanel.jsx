import React from "react";

export default function BioPanel({ data }) {
  return (
    <div className="bio">
      <p className="bio__p">{data.profile.bioText}</p>
      <div className="bio__meta">
        <div className="bio__row">
          <span className="badge">Location</span>
          <span className="bio__val">{data.profile.location}</span>
        </div>
        <div className="bio__row">
          <span className="badge">Education</span>
          <span className="bio__val">LNMIIT, Jaipur • B.Tech (ECE) • 2022–2025</span>
        </div>
      </div>
    </div>
  );
}
