import React from "react";

export default function LayoutShell({ children }) {
  return (
    <div className="page">
      <div className="page__inner">{children}</div>
    </div>
  );
}
