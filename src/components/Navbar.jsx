import { AppBar, Toolbar, Typography, Box, Button, Container } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
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

  const navItems = [
    { title: "Home", icon: <CottageOutlinedIcon sx={{ fontSize: 18 }} />, path: "/" },
    { title: "About", icon: <InfoOutlinedIcon sx={{ fontSize: 18 }} />, path: "/about" },
    { title: "Blog", icon: <MenuBookOutlinedIcon sx={{ fontSize: 18 }} />, path: "/blog" },
    { title: "Services", icon: <EngineeringOutlinedIcon sx={{ fontSize: 18 }} />, path: "/services" },
  ];

  return (
    <NavbarContainer position="fixed">
      {/* Added Container to constrain width */}
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5 }}>
          
          {/* Logo and Brand Name */}
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

          {/* Center: Editorial Pill Navigation */}
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

          {/* Right: The Anchor CTA */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => navigate("/profile")}
              startIcon={<PersonOutlineIcon sx={{ fontSize: 18 }} />}
              sx={{
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
          </Box>

        </Toolbar>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;