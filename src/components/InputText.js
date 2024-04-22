import React from "react";

export const InputText = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input value={props.value}></input>
        </div>
    );
};
