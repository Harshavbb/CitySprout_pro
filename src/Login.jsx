import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Button, Typography, CircularProgress, Alert } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://csbackend-jcrz.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login Response:", data); // Debugging

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token & user-id in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("username", data.user.name);


      // Redirect to Profile page
      navigate("/profile");
    } catch (err) {
      console.error("Login Error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff" }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Login
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

      <Button variant="contained" color="primary" sx={{ mt: 3, width: "100%" }} onClick={handleLogin} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Login"}
      </Button>

      {/* Sign Up Link */}
      <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
        Don't have an account? <Link to="/signup" style={{ color: "#2E7D32", fontWeight: "bold", textDecoration: "none" }}>Sign Up</Link>
      </Typography>
    </Box>
  );
};

export default Login;
