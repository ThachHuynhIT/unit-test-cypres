import React from "react";

export const FormAlert = ({ message, type }) => {
  return (
    <span
      style={{
        minHeight: 20,
        color: type === "success" ? "green" : "red",
      }}
    >
      {message}
    </span>
  );
};
