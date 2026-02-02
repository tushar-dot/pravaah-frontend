import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked"); // 👈 ADD THIS

    try {
      console.log("Calling login API"); // 👈 ADD
      const res = await axios.post("http://localhost:8080/auth/login", {
        emailId,
        password,
      });

      localStorage.setItem("token", res.data);

      // ✅ NAVIGATE HERE
      navigate("/createRequest");

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
    <h2>Pravaah</h2>
    <h3>Case & Workflow Management</h3>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default Login;
