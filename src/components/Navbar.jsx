import { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import logo from "../assets/final_logo.png"; 

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  background: "rgba(246, 247, 242, 0.85)", 
  backdropFilter: "blur(16px)",
  boxShadow: "none", 
  borderBottom: "1px solid #E5E8DF", 
  color: theme.palette.text.primary,
}));

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { title: "Home", icon: <CottageOutlinedIcon sx={{ fontSize: 18 }} />, path: "/" },
    { title: "About", icon: <InfoOutlinedIcon sx={{ fontSize: 18 }} />, path: "/about" },
    { title: "Blog", icon: <MenuBookOutlinedIcon sx={{ fontSize: 18 }} />, path: "/blog" },
    { title: "Services", icon: <EngineeringOutlinedIcon sx={{ fontSize: 18 }} />, path: "/services" },
  ];

  // The premium mobile slide-out menu
  const drawerContent = (
    <Box sx={{ width: 280, height: "100%", backgroundColor: "background.default", display: "flex", flexDirection: "column" }}>
      {/* Mobile Drawer Header */}
      <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="CitySprout Logo" style={{ height: 32, marginRight: 8 }} />
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "text.primary" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Mobile Navigation Links */}
      <List sx={{ px: 2, flexGrow: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.title} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => { navigate(item.path); handleDrawerToggle(); }}
                sx={{
                  borderRadius: "16px",
                  backgroundColor: isActive ? "#FFFFFF" : "transparent",
                  border: "1px solid",
                  borderColor: isActive ? "#E5E8DF" : "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                <ListItemIcon sx={{ color: isActive ? "text.primary" : "text.secondary", minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.title} 
                  primaryTypographyProps={{ 
                    fontWeight: isActive ? 600 : 500, 
                    color: isActive ? "text.primary" : "text.secondary",
                    fontFamily: "'Poppins', sans-serif"
                  }} 
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Mobile Profile CTA pinned to the bottom */}
      <Box sx={{ p: 3 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => { navigate("/profile"); handleDrawerToggle(); }}
          startIcon={<PersonOutlineIcon />}
          sx={{
            backgroundColor: "text.primary",
            color: "#F6F7F2",
            fontWeight: 500,
            py: 1.5,
            borderRadius: "50px",
            boxShadow: "none",
          }}
        >
          Profile
        </Button>
      </Box>
    </Box>
  );

  return (
    <NavbarContainer position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5 }}>
          
          {/* Logo and Brand Name (Always visible) */}
          <Box 
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} 
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="CitySprout Logo" style={{ height: 40, marginRight: 12 }} />
            <Typography
              variant="h5"
              sx={{ color: "text.primary", fontWeight: 600, fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
            >
              CitySprout
            </Typography>
          </Box>

          {/* Desktop Center: Editorial Pill Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.title}
                  onClick={() => navigate(item.path)}
                  startIcon={item.icon}
                  disableElevation
                  sx={{
                    color: isActive ? "text.primary" : "text.secondary",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    px: 2.5,
                    py: 1,
                    borderRadius: "50px",
                    border: "1px solid",
                    borderColor: isActive ? "#E5E8DF" : "transparent",
                    backgroundColor: isActive ? "#FFFFFF" : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      color: "text.primary",
                      backgroundColor: "#FFFFFF",
                      borderColor: "#E5E8DF",
                    } 
                  }}
                >
                  {item.title}
                </Button>
              );
            })}
          </Box>

          {/* Right Area: Profile CTA (Desktop) & Hamburger Menu (Mobile) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            
            {/* The Anchor CTA (Hidden on Mobile) */}
            <Button
              variant="contained"
              onClick={() => navigate("/profile")}
              startIcon={<PersonOutlineIcon sx={{ fontSize: 18 }} />}
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "text.primary",
                color: "#F6F7F2",
                fontWeight: 500,
                px: 3,
                py: 1,
                borderRadius: "50px",
                boxShadow: "none",
                "&:hover": { backgroundColor: "action.hover", boxShadow: "none" }
              }}
            >
              Profile
            </Button>

            {/* Mobile Hamburger Menu Icon */}
            <IconButton 
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            
          </Box>
        </Toolbar>
      </Container>

      {/* The Slide-Out Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", borderLeft: "1px solid #E5E8DF" },
        }}
      >
        {drawerContent}
      </Drawer>
    </NavbarContainer>
  );
};

export default Navbar;