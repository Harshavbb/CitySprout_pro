import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined"; // Home
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"; // About
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"; // Blog
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined"; // Services
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"; // Profile
import { styled } from "@mui/system";
import logo from "../assets/final_logo.png"; // Import logo

const NavbarContainer = styled(AppBar)({
  background: "rgba(255, 255, 255, 0.1)", // Glass effect
  backdropFilter: "blur(10px)", // Blur effect
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
});

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", top: 0 }}>
        {/* Logo and Brand Name */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src={logo} alt="CitySprout Logo" style={{ height: 60, marginRight: 10 }} />
          <Typography
            variant="h5"
            fontWeight="medium"
            sx={{ color: "#2E7D32", fontFamily: "Poppins, sans-serif" }}
          >
            CitySprout
          </Typography>
        </Box>

        {/* Navigation Icons */}
        <Box>
          <Tooltip title="Home">
            <IconButton onClick={() => navigate("/")} sx={{ mx: 1, "&:hover": { color: "#2E7D32" } }}>
              <CottageOutlinedIcon fontSize="medium" />
            </IconButton>
          </Tooltip>

          <Tooltip title="About">
            <IconButton onClick={() => navigate("/about")} sx={{ mx: 1, "&:hover": { color: "#FF9800" } }}>
              <InfoOutlinedIcon fontSize="medium" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Blog">
            <IconButton onClick={() => navigate("/blog")} sx={{ mx: 1, "&:hover": { color: "#5E35B1" } }}>
              <MenuBookOutlinedIcon fontSize="medium" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Services">
            <IconButton onClick={() => navigate("/services")} sx={{ mx: 1, "&:hover": { color: "#D32F2F" } }}>
              <EngineeringOutlinedIcon fontSize="medium" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Profile">
            <IconButton onClick={() => navigate("/profile")} sx={{ mx: 1, "&:hover": { color: "#0288D1" } }}>
              <PersonOutlineIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;
