import React from "react";
export default function NotificationText({ children }) {
  return (
    children && (
      <div className="noti-text" style={{ marginTop: "0.5rem" }}>
        {children}
      </div>
    )
  );
}
