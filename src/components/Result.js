import React from "react";

export const Result = ({ value = 0 }) => {
  return (
    <label className="result">
      <div className="label">Resultado</div>
      <input type="text" value={value} disabled={true}  />
    </label>
  );
};
