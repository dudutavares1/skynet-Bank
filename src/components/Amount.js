import React from "react";

export const Amount = ({ error, value, onChange }) => {
  const errorClass = error ? "tem-error" : "";
  return (
    <label className={errorClass}>
      <div className="label">Quantidade a ser convertida:</div>
      <input
        type="text"
        placeholder="Definir quantidade"
        value={value}
        onChange={onChange}
      />
      {error && <div className="error-hint">{error}</div>}
    </label>
  );
};
