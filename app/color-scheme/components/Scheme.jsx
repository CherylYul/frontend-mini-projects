import React from "react";
import { FormContext } from "../App";
import tinycolor from "https://esm.sh/tinycolor2";

export default function Scheme() {
  const { data } = React.useContext(FormContext);
  return (
    <div className="color-container">
      {data.map((hex) => (
        <div
          key={hex}
          style={{
            backgroundColor: hex,
            color: tinycolor(hex).isLight() ? "#1F2937" : "#D1D5DB",
          }}
        >
          <p className="text">{hex}</p>
        </div>
      ))}
    </div>
  );
}
