import React from "react";

export default function Info({ children }) {
  return (
    <div className="info">
      <i className="bi bi-info-circle-fill tooltip"></i>
      <div className="info-details">{children}</div>
    </div>
  );
}
