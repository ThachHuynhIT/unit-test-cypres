import React, { useState } from "react";
import { InputText } from "../components/InputText";
import { FormAlert } from "../components/FormAlert";

const correctPassword = "12345678";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, _setMessage] = useState("");

  const handleLogin = () => {
    const validate = validateInput(userName, password);

    if (validate.isValidated) {
      callApiLogin(userName, password);
    } else {
      setMessage(validate.message, "failed");
    }
  };

  const setMessage = (message, type) => {
    _setMessage({ message, type });
  };

  const callApiLogin = (userName, password) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        if (json.find((user) => user.username === userName && correctPassword === password)) {
          setMessage("Login successful", "success");
        } else {
          setMessage("Login failed", "failed");
        }
      });
  };

  const validateInput = (userName, password) => {
    let isValidated = true;
    let message = "";
    if (!userName || !password) {
      isValidated = false;
      message = "Please enter user name and password";
    } else if (userName.length < 8 || password.length < 8) {
      isValidated = false;
      message = "User name and password must be at least 8 characters";
    }

    return {
      isValidated,
      message,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
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

        <FormAlert message={message.message} type={message.type} />

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
