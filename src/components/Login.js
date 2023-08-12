import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const h1Style = {
  color: "blue",
  fontSize: "36px",
  fontWeight: "bold",
  margin: "20px",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
const buttonStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "blue",
  color: "white",
  cursor: "pointer",
};

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      setError(false);
      navigate("/home");
    } else {
      setError(true);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h1 style={h1Style}>Login</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "10%",
          gap: "10px",
        }}
      >
        <input
          style={inputStyle}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
        />
        <input
          style={inputStyle}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />
        <button style={buttonStyle} onClick={handleLogin}>
          Login
        </button>
        {error && <p style={{ color: "red" }}>Invalid username or password</p>}
      </div>
    </div>
  );
};

export default Login;
