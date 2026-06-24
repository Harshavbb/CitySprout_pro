import { useEffect, useState } from "react";
import { Box, TextField, Button, Typography, CircularProgress, Alert, Container, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import API_URL from "../config/api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [updating, setUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!token || !userId) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_URL}/api/auth/user/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "user-id": userId,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch profile");

        const data = await response.json();
        setUser({
          name: data.name || "",
          email: data.email || "",
          contact: data.contact || "",
          address: data.address || "",
        });

        // ✅ Store the username in localStorage for HeroSection
        localStorage.setItem("username", data.name || "");
        window.dispatchEvent(new Event("storage")); // ✅ Force update other components

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, userId, navigate]);

  const handleUpdate = async () => {
    setUpdating(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/auth/user/profile/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "user-id": userId,
        },
        body: JSON.stringify({
          name: user.name,
          contact: user.contact,
          address: user.address,
        }),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      const data = await response.json();
      setSuccess(data.message || "Profile updated successfully!");
      setIsEditing(false);

      // ✅ Update the stored username after update
      localStorage.setItem("username", user.name);
      window.dispatchEvent(new Event("storage"));

    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username"); // ✅ Ensure username is removed
    window.dispatchEvent(new Event("storage")); // ✅ Update HeroSection

    navigate("/login");
    window.location.reload();
  };

  // Compact Pill-shaped Input Styling (matching Auth pages)
  const inputStyles = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
      backgroundColor: "#F6F7F2", // Using the warm cream to contrast against the white card
      "& fieldset": { borderColor: "#E5E8DF", transition: "all 0.3s ease" },
      "&:hover fieldset": { borderColor: "primary.main" },
      "&.Mui-focused fieldset": { borderColor: "primary.main", borderWidth: "1px" },
    }
  };

  // Reusable component for the structured ledger view
  const InfoRow = ({ label, value }) => (
    <Box sx={{ display: "flex", py: 2.5, borderBottom: "1px solid #E5E8DF", alignItems: "center" }}>
      <Typography sx={{ width: "100px", color: "text.secondary", fontWeight: 500, fontSize: "0.95rem" }}>
        {label}
      </Typography>
      <Typography sx={{ color: "text.primary", fontWeight: 500, fontSize: "1.05rem" }}>
        {value || "Not provided"}
      </Typography>
    </Box>
  );

  if (loading) return (
    <Box sx={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CircularProgress sx={{ color: "primary.main" }} />
    </Box>
  );

  return (
    <Box 
      sx={{ 
        minHeight: "85vh", 
        display: "flex", 
        alignItems: "flex-start", 
        pt: { xs: 4, md: 10 }, 
        pb: 8,
        position: "relative",
        overflow: "hidden", // Keeps the background shapes contained
        backgroundColor: "background.default"
      }}
    >
      
      {/* --- Luxe Architectural Background Elements --- */}
      
      {/* Primary massive faint ring */}
      <Box 
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: { xs: "500px", md: "900px" },
          height: { xs: "500px", md: "900px" },
          border: "1px solid rgba(65, 97, 27, 0.08)", // Faint version of #41611b
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none"
        }} 
      />
      
      {/* Secondary overlapping accent ring */}
      <Box 
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: { xs: "350px", md: "650px" },
          height: { xs: "350px", md: "650px" },
          border: "1px solid rgba(131, 170, 70, 0.12)", // Faint version of #83aa46
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none"
        }} 
      />

      {/* Very soft ambient glow (using your info color #a9c5dc for an airy feel) */}
      <Box 
        sx={{
          position: "absolute",
          top: "5%",
          right: "15%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(169, 197, 220, 0.15) 0%, rgba(246,247,242,0) 70%)",
          zIndex: 0,
          pointerEvents: "none"
        }} 
      />
      {/* --------------------------------------------- */}


      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* The Editorial Profile Card */}
        <Box 
          sx={{ 
            backgroundColor: "#FFFFFF", 
            borderRadius: "32px", 
            border: "1px solid #E5E8DF",
            overflow: "hidden",
            p: { xs: 4, md: 6 },
            boxShadow: "0 24px 48px rgba(0,0,0,0.02)" // Extremely soft lift off the background elements
          }}
        >
          {/* Header Profile Section */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <Avatar 
              sx={{ 
                width: 80, 
                height: 80, 
                backgroundColor: "#F0F2EB", 
                color: "primary.main",
                border: "1px solid #E5E8DF",
                mr: 3
              }}
            >
              <PersonOutlineIcon sx={{ fontSize: 40 }} />
            </Avatar>
            <Box>
              <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 600, letterSpacing: "1px" }}>
                Urban Farmer
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600, color: "text.primary", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {user?.name || "Your Profile"}
              </Typography>
            </Box>
          </Box>

          {error && <Alert severity="error" sx={{ mb: 3, borderRadius: "12px" }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mb: 3, borderRadius: "12px" }}>{success}</Alert>}

          {/* View Mode: Structured Ledger */}
          {user && !isEditing && (
            <Box>
              <Box sx={{ borderTop: "1px solid #E5E8DF", mb: 5 }}>
                <InfoRow label="Name" value={user.name} />
                <InfoRow label="Email" value={user.email} />
                <InfoRow label="Contact" value={user.contact} />
                <InfoRow label="Address" value={user.address} />
              </Box>

              <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => setIsEditing(true)}
                  sx={{ 
                    py: 1.5, 
                    backgroundColor: "text.primary", 
                    color: "#F6F7F2",
                    fontSize: "1rem",
                    borderRadius: "50px",
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "action.hover", boxShadow: "none" }
                  }}
                >
                  Update Profile
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth
                  onClick={handleLogout}
                  sx={{ 
                    py: 1.5, 
                    borderColor: "#E5E8DF", 
                    color: "text.secondary",
                    fontSize: "1rem",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "text.primary", color: "text.primary", backgroundColor: "transparent" }
                  }}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          )}

          {/* Edit Mode: Pill Inputs */}
          {isEditing && user && (
            <Box>
              <TextField
                label="Full Name"
                fullWidth
                size="small"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                sx={inputStyles}
              />
              <TextField
                label="Email Address"
                fullWidth
                size="small"
                value={user.email}
                disabled
                sx={{
                  ...inputStyles,
                  "& .MuiOutlinedInput-root": {
                    ...inputStyles["& .MuiOutlinedInput-root"],
                    backgroundColor: "#f5f5f5", // Indicate disabled state visually
                  }
                }}
              />
              <TextField
                label="Contact Number"
                fullWidth
                size="small"
                value={user.contact}
                onChange={(e) => setUser({ ...user, contact: e.target.value })}
                sx={inputStyles}
              />
              <TextField
                label="Address"
                fullWidth
                size="small"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                sx={inputStyles}
              />
              
              <Box sx={{ display: "flex", gap: 2, mt: 3, flexDirection: { xs: "column", sm: "row" } }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={handleUpdate} 
                  disabled={updating}
                  sx={{ 
                    py: 1.5, 
                    backgroundColor: "primary.main", 
                    color: "#FFFFFF",
                    fontSize: "1rem",
                    borderRadius: "50px",
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "action.selected", boxShadow: "none" }
                  }}
                >
                  {updating ? "Saving..." : "Save Changes"}
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth
                  onClick={() => setIsEditing(false)}
                  sx={{ 
                    py: 1.5, 
                    borderColor: "#E5E8DF", 
                    color: "text.secondary",
                    fontSize: "1rem",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "text.primary", color: "text.primary", backgroundColor: "transparent" }
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          )}

        </Box>
      </Container>
    </Box>
  );
};

export default Profile;