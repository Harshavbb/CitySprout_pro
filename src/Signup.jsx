import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, Button, TextField, Typography, IconButton, Divider, Alert, Link } from "@mui/material";
import { Google, Apple, Facebook } from "@mui/icons-material";
import signupIllustration from "./assets/Register.png"; 
import API_URL from "./config/api";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "user", 
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
      name: formData.username, 
      email: formData.email,
      password: formData.password,
      role: "user", 
    };
  
    try {
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      if (!response.ok) throw new Error(data.message || "Signup failed");
  
      setSuccess("Signup successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Compact Pill-shaped Input Styling
  const inputStyles = {
    mb: 1.5, // Tighter margin to fit more fields without scrolling
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
      backgroundColor: "#FFFFFF",
      "& fieldset": { borderColor: "#E5E8DF", transition: "all 0.3s ease" },
      "&:hover fieldset": { borderColor: "primary.main" },
      "&.Mui-focused fieldset": { borderColor: "primary.main", borderWidth: "1px" },
    }
  };

  return (
    // Outer wrapper flex-centers the card and prevents scroll
    <Box sx={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      
      {/* The Floating Editorial Card */}
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" }, 
          width: "100%", 
          maxWidth: "900px", 
          backgroundColor: "#FFFFFF", 
          borderRadius: "32px", 
          border: "1px solid #E5E8DF",
          boxShadow: "0 24px 48px rgba(0,0,0,0.03)", 
          overflow: "hidden" 
        }}
      >
        
        {/* Left Side - Form Box */}
        <Box sx={{ flex: 1.2, p: { xs: 4, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          
          <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 600, letterSpacing: "1px", mb: 0.5 }}>
            Join The Movement
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, color: "text.primary", mb: 1, letterSpacing: "-0.02em" }}>
            Create an Account
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            Sign up to start your journey with CitySprout.
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2, py: 0, borderRadius: "12px" }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mb: 2, py: 0, borderRadius: "12px" }}>{success}</Alert>}

          <TextField
            label="Full Name"
            name="username"
            fullWidth
            size="small" // Compact size
            value={formData.username}
            onChange={handleChange}
            sx={inputStyles}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            fullWidth
            size="small"
            value={formData.email}
            onChange={handleChange}
            sx={inputStyles}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            size="small"
            value={formData.password}
            onChange={handleChange}
            sx={inputStyles}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              mt: 1,
              mb: 2,
              py: 1.2,
              backgroundColor: "text.primary",
              color: "#F6F7F2",
              fontSize: "1rem",
              borderRadius: "50px",
              boxShadow: "none",
              "&:hover": { backgroundColor: "action.hover", boxShadow: "none" },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
          </Button>

          <Divider sx={{ my: 2, color: "text.secondary", fontSize: "0.80rem", "&::before, &::after": { borderColor: "#E5E8DF" } }}>
            or continue with
          </Divider>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mb: 2 }}>
            {[<Google key="g" fontSize="small" />, <Apple key="a" fontSize="small" />, <Facebook key="f" fontSize="small" />].map((icon, i) => (
              <IconButton 
                key={i} 
                size="small"
                sx={{ 
                  border: "1px solid #E5E8DF", 
                  color: "text.primary", 
                  backgroundColor: "#FFFFFF",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "primary.main", color: "#FFFFFF", borderColor: "primary.main" } 
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>

          <Typography variant="body2" sx={{ textAlign: "center", color: "text.secondary" }}>
            Already have an account?{" "}
            <Link component={RouterLink} to="/login" sx={{ color: "primary.main", fontWeight: 600, textDecoration: "none" }}>
              Login now
            </Link>
          </Typography>

        </Box>

        {/* Right Side - Image Box */}
        <Box 
          sx={{ 
            flex: 1, 
            backgroundColor: "#F0F2EB", 
            display: { xs: "none", md: "flex" }, 
            alignItems: "center", 
            justifyContent: "center",
            p: 4,
            borderLeft: "1px solid #E5E8DF"
          }}
        >
          <img
            src={signupIllustration}
            alt="Join Us"
            style={{ width: "100%", maxWidth: "300px", objectFit: "contain" }}
          />
        </Box>
        
      </Box>
    </Box>
  );
};

export default Signup;