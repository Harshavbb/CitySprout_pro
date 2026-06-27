import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import heroImage from "../assets/Hero_image.png";

const HeroWrapper = styled(Box)(({ theme }) => ({
  minHeight: "85vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  position: "relative",
  overflow: "hidden",
  padding: "40px 0", // Tighter padding for mobile
  [theme.breakpoints.up("md")]: {
    padding: "60px 0",
  }
}));

const FrameOutline = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 15,
  right: -15,
  width: "100%",
  maxWidth: "480px",
  height: "350px", // Shorter on mobile
  borderRadius: "240px 240px 16px 16px", 
  border: `1px solid ${theme.palette.secondary.main}`,
  zIndex: 0,
  display: { xs: "none", md: "block" },
  [theme.breakpoints.up("md")]: {
    height: "600px", // Full height on desktop
    top: 20,
    right: -20,
  }
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "480px",
  height: "350px", // Shorter on mobile
  margin: "0 auto",
  borderRadius: "240px 240px 16px 16px", 
  overflow: "hidden",
  border: "1px solid #E5E8DF",
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  "&:hover img": {
    transform: "scale(1.03)", 
  },
  [theme.breakpoints.up("md")]: {
    height: "600px", // Full height on desktop
  }
}));

const messages = [
  "Grow your own food, nourish your soul.",
  "A greener city starts with you.",
  "Cultivate the future, one plant at a time.",
  "Turn concrete jungles into edible gardens!",
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = !username && setInterval(() => setIndex((i) => (i + 1) % messages.length), 5500);
    return () => clearInterval(interval);
  }, [username]);

  useEffect(() => {
    window.addEventListener("storage", () => setUsername(localStorage.getItem("username") || ""));
    return () => window.removeEventListener("storage", () => {});
  }, []);

  return (
    <HeroWrapper>
      <Container maxWidth="lg">
        {/* TWEAK: Adjusted spacing from 8 to responsive { xs: 5, md: 8 } */}
        <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={{ xs: 5, md: 8 }} alignItems="center" justifyContent="space-between">
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, zIndex: 2 }}>
            
            <Typography 
              variant="subtitle2" 
              sx={{ 
                color: "primary.main", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", mb: 3,
                display: "inline-block", border: "1px solid", borderColor: "primary.main", padding: "8px 20px", borderRadius: "50px" 
              }}
            >
              The Urban Farming Revolution
            </Typography>

            <Box sx={{ height: { xs: "120px", sm: "160px", md: "260px" }, mb: 3, display: "flex", alignItems: "center" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={username ? "welcome" : messages[index]}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: "100%" }} 
                >
                  {/* TWEAK: Smaller xs font size so it doesn't break words on tiny phones */}
                  <Typography variant="h1" sx={{ fontSize: { xs: "2.25rem", sm: "3.5rem", md: "4.5rem" }, color: "text.primary", lineHeight: 1.05, letterSpacing: "-0.04em", fontWeight: 500 }}>
                    {username ? `Welcome back, ${username}!` : messages[index]}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </Box>

            <Typography variant="body1" sx={{ color: "text.secondary", mb: 5, maxWidth: "480px", mx: { xs: "auto", md: "0" }, fontSize: "1.1rem", lineHeight: 1.7 }}>
              {username 
                ? "Your urban farming dashboard is ready. Upload a photo of your space to get fresh, AI-powered planting recommendations."
                : "Transform urban spaces into thriving green farms. Join the community and start harvesting your own fresh produce today."}
            </Typography>

            {username ? (
              <Button 
                variant="contained" color="primary" size="large" startIcon={<AutoAwesomeIcon />} 
                onClick={() => navigate("/services")} sx={{ px: 5, py: 1.5, fontSize: "1.05rem" }}
              >
                Analyze a Space
              </Button>
            ) : (
              <Button 
                variant="contained" color="primary" size="large" endIcon={<ArrowForwardRoundedIcon />} 
                onClick={() => navigate("/signup")} sx={{ px: 5, py: 1.5, fontSize: "1.05rem", width: { xs: "100%", sm: "auto" } }}
              >
                Get Started
              </Button>
            )}
          </Box>

          <Box sx={{ flex: 1, width: "100%", display: "flex", justifyContent: "center", position: "relative" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
              <FrameOutline />
              <ImageContainer>
                <img src={heroImage} alt="Urban Farming" />
              </ImageContainer>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;