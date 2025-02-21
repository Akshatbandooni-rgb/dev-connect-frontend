import { useState } from "react";
import "./styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(email, password);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="title">Login</h2>
        <div className="field">
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
