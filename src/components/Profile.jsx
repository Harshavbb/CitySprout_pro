import { useEffect, useState } from "react";
import { Box, TextField, Button, Typography, CircularProgress, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        const response = await fetch("https://csbackend-jcrz.onrender.com/api/auth/user/profile", {
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
      const response = await fetch("https://csbackend-jcrz.onrender.com/api/auth/user/profile/update", {
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

  if (loading) return <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />;

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff" }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        My Profile
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      {user && !isEditing && (
        <Box>
          <Typography variant="body1"><strong>Name:</strong> {user.name}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
          <Typography variant="body1"><strong>Contact:</strong> {user.contact}</Typography>
          <Typography variant="body1"><strong>Address:</strong> {user.address}</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3, width: "100%" }} onClick={() => setIsEditing(true)}>
            Update Profile
          </Button>
          <Button variant="outlined" color="error" sx={{ mt: 2, width: "100%" }} onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      )}

      {isEditing && user && (
        <>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={user.email}
            disabled
          />
          <TextField
            label="Contact"
            fullWidth
            margin="normal"
            variant="outlined"
            value={user.contact}
            onChange={(e) => setUser({ ...user, contact: e.target.value })}
          />
          <TextField
            label="Address"
            fullWidth
            margin="normal"
            variant="outlined"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
          <Button variant="contained" color="primary" sx={{ mt: 3, width: "100%" }} onClick={handleUpdate} disabled={updating}>
            {updating ? "Updating..." : "Save Changes"}
          </Button>
          <Button variant="text" color="secondary" sx={{ mt: 2, width: "100%" }} onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </>
      )}
    </Box>
  );
};

export default Profile;
