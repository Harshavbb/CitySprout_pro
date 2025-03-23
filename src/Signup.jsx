import { Box, Button, TextField, Typography, IconButton, Divider, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Google, Apple, Facebook } from "@mui/icons-material"; // Icons
import signupIllustration from "./assets/standing_girl.png"; // Replace with your illustration

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "user", // Fixed role
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
  
    const payload = {
      name: formData.username, // Send username as 'name'
      email: formData.email,
      password: formData.password,
      role: "user", // Manually include 'role' even though it's not in the form
    };
  
    try {
      const response = await fetch("https://csbackend-jcrz.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
  
      setSuccess("Signup successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Box
      sx={{
        display: "flex",
        height: "95vh",
        alignItems: "center",
        width: "99vw",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "900px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Left Side - Form Section */}
        <Box sx={{ flex: 1, padding: "3rem", textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold">
            Welcome!
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Sign up to start your journey with CitySprout.
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}

          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{ sx: { borderRadius: "30px" } }}
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{ sx: { borderRadius: "30px" } }}
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{ sx: { borderRadius: "30px" } }}
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: "100%",
              borderRadius: "30px",
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>

          <Divider sx={{ my: 3 }}>or continue with</Divider>

          {/* Social Media Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton sx={{ bgcolor: "#000", color: "#fff", borderRadius: "50px" }}>
              <Google />
            </IconButton>
            <IconButton sx={{ bgcolor: "#000", color: "#fff", borderRadius: "50px" }}>
              <Apple />
            </IconButton>
            <IconButton sx={{ bgcolor: "#000", color: "#fff", borderRadius: "50px" }}>
              <Facebook />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            sx={{ mt: 3, textAlign: "center", color: "text.secondary" }}
          >
            Already have an account?{" "}
            <span
              style={{ color: "#4CAF50", cursor: "pointer", fontWeight: "bold" }}
              onClick={() => navigate("/login")}
            >
              Login now
            </span>
          </Typography>
        </Box>

        {/* Right Side - Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E8F5E9",
            padding: "2rem",
          }}
        >
          <img
            src={signupIllustration}
            alt="Signup Illustration"
            style={{ width: "100%", maxWidth: "350px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
