import React from "react";

export const FormAlert = ({ message, type }) => {
  const getColor = (type) => {
    switch (type) {
      case "success":
        return "green";
      case "error":
        return "red";
      // case "warning":
      //     return "orange";
      default:
        return "black";
    }
  };

  return (
    <span
      style={{
        minHeight: 20,
        color: getColor(type),
      }}
    >
      {message}
    </span>
  );
};
