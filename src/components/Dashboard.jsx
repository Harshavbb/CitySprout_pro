import { useEffect, useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, Typography, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}><CircularProgress /></Box>;
  }

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
        <Box sx={{ width: 240, p: 2 }}>
          <Typography variant="h6" fontWeight="bold">CitySprout</Typography>
          <List>
            <ListItem button onClick={() => navigate("/dashboard")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => navigate("/profile")}>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={() => navigate("/settings")}>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4">Welcome to CitySprout Dashboard</Typography>
        {user && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Logged in as <strong>{user.name}</strong> ({user.email})
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
