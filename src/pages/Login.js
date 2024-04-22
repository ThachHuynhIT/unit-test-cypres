import React, { useState } from "react";
import { InputText } from "../components/InputText";

const correctUserName = "admin";
const correctPassword = "admin";

export const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        if (userName === correctUserName && password === correctPassword) {
            setMessage("Login successful");
        } else {
            setMessage("Login failed");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
                background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                    height: "auto",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxShadow: "0 0 10px #ccc",
                    background: "#fff",
                    margin: "auto",
                    gap: "10px",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                    }}
                >
                    Login
                </h1>

                <InputText
                    label={"User name"}
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <InputText
                    label={"Password"}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                {message && (
                    <span
                        style={{
                            color:
                                message === "Login successful"
                                    ? "green"
                                    : "red",
                        }}
                    >
                        {message}
                    </span>
                )}
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
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};
