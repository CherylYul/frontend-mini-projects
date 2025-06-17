import React from "react";
import { PasswordContext } from "../App";

export default function Slider({ children }) {
  const { form, handleChange } = React.useContext(PasswordContext);
  return (
    <div className="password-length">
      <label htmlFor={children}>{children}</label>
      <input
        type="number"
        min="1"
        max="50"
        step="1"
        value={form.Length}
        name="Length"
        onChange={handleChange}
      />
      <input
        type="range"
        min="1"
        max="50"
        step="1"
        value={form.Length}
        name="Length"
        onChange={handleChange}
      />
    </div>
  );
}
