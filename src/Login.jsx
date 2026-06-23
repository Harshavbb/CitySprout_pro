import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, TextField, Button, Typography, CircularProgress, Alert, Link } from "@mui/material";
import API_URL from "./config/api";
import loginIllustration from "./assets/Login.png"; 

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
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("username", data.user.name);

      navigate("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Compact Pill-shaped Input Styling
  const inputStyles = {
    mb: 2, // Tighter margin
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
          maxWidth: "900px", // Compact maximum width
          backgroundColor: "#FFFFFF", 
          borderRadius: "32px", 
          border: "1px solid #E5E8DF",
          boxShadow: "0 24px 48px rgba(0,0,0,0.03)", // Very soft lift
          overflow: "hidden" 
        }}
      >
        
        {/* Left Side - Image Box */}
        <Box 
          sx={{ 
            flex: 1, 
            backgroundColor: "#F0F2EB", 
            display: { xs: "none", md: "flex" }, 
            alignItems: "center", 
            justifyContent: "center",
            p: 4,
            borderRight: "1px solid #E5E8DF"
          }}
        >
          <img
            src={loginIllustration}
            alt="Welcome Back"
            style={{ width: "100%", maxWidth: "300px", objectFit: "contain" }}
          />
        </Box>

        {/* Right Side - Form Box */}
        <Box sx={{ flex: 1.2, p: { xs: 4, md: 6 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          
          <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 600, letterSpacing: "1px", mb: 0.5 }}>
            Welcome Back
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, color: "text.primary", mb: 1, letterSpacing: "-0.02em" }}>
            Login to CitySprout
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            Continue your urban farming journey.
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2, py: 0, borderRadius: "12px" }}>{error}</Alert>}

          <TextField 
            label="Email Address" 
            fullWidth 
            size="small" // Compact size
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            sx={inputStyles}
          />
          <TextField 
            label="Password" 
            type="password" 
            fullWidth 
            size="small" // Compact size
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            sx={inputStyles}
          />

          <Button 
            variant="contained" 
            fullWidth
            onClick={handleLogin} 
            disabled={loading}
            sx={{ 
              mt: 2, 
              mb: 3, 
              py: 1.2, 
              backgroundColor: "text.primary", 
              color: "#F6F7F2",
              fontSize: "1rem",
              borderRadius: "50px",
              boxShadow: "none",
              "&:hover": { backgroundColor: "action.hover", boxShadow: "none" }
            }} 
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
          </Button>

          <Typography variant="body2" sx={{ textAlign: "center", color: "text.secondary" }}>
            Don't have an account?{" "}
            <Link component={RouterLink} to="/signup" sx={{ color: "primary.main", fontWeight: 600, textDecoration: "none" }}>
              Create one
            </Link>
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default Login;