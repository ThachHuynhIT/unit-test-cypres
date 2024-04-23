import React from "react";

export const HappyButton = ({ text, onClick }) => {
    return (
        <button
            style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
