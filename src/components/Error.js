import React from "react";

export const Error = ({ message }) => {
  const defaultMessage = "Algo deu errado. Por favor, tente novamente mais tarde.";
  return <div className="error">{`Oops! ${message || defaultMessage}`}</div>;
}
