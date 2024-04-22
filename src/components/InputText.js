import React from "react";

export const InputText = (props) => {
    return (
        <div>
            <label
                style={{
                    fontSize: "0.8em",
                    color: "#888",
                }}
            >
                {props.label}
            </label>
            <input
                style={{
                    padding: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
                value={props.value}
                onChange={props.onChange}
            ></input>
        </div>
    );
};
