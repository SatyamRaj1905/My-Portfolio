import React from "react";

function LinkRow({ label, value, href }) {
  const has = Boolean(value);
  return (
    <div className="contact__row">
      <span className="badge">{label}</span>
      {has ? (
        href ? (
          <a className="contact__val" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            {value}
          </a>
        ) : (
          <span className="contact__val">{value}</span>
        )
      ) : (
        <span className="muted">Add in src/data.js</span>
      )}
    </div>
  );
}

export default function ContactPanel({ data }) {
  const { links } = data;

  return (
    <div className="contact">
      <p className="contact__p">{data.contact.desc}</p>

      <div className="contact__rows">
        <LinkRow label="Email" value={links.email} href={`mailto:${links.email}`} />
        <LinkRow label="Phone" value={links.phone} href={`tel:${links.phone.replace(/\s/g, "")}`} />
        <LinkRow label="GitHub" value={links.github} href={links.github} />
        <LinkRow label="LinkedIn" value={links.linkedin} href={links.linkedin} />
        <LinkRow label="LeetCode" value={links.leetcode} href={links.leetcode} />
        <LinkRow label="CSES" value={links.cses} href={links.cses} />
      </div>

      <div className="contact__cta">
        <a className="pixel-btn" href={`mailto:${links.email}`}>
          Send Email
        </a>
      </div>
    </div>
  );
}
