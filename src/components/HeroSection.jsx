import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-bg.jpg";

const HeroSectionWrapper = styled(Box)({
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  color: "#fff",
  position: "relative",
  padding: "0 20px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, rgba(0, 50, 0, 0.5), rgba(0, 0, 0, 0.7))",
  },
});

const TextContainer = styled(Box)({
  position: "relative",
  zIndex: 2,
  maxWidth: "80%",
});

const ButtonWrapper = styled(Box)({
  marginTop: "20px",
});

const messages = [
  "Grow your own food, nourish your soul. 🌱",
  "A greener city starts with you. 🍃",
  "Cultivate the future, one plant at a time. 🌿",
  "Turn concrete jungles into edible gardens! 🌍",
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = !username && setInterval(() => setIndex((i) => (i + 1) % messages.length), 4000);
    return () => clearInterval(interval);
  }, [username]);

  useEffect(() => {
    window.addEventListener("storage", () => setUsername(localStorage.getItem("username") || ""));
    return () => window.removeEventListener("storage", () => {});
  }, []);

  return (
    <HeroSectionWrapper>
      <TextContainer>
        <AnimatePresence>
          <motion.div
            key={username ? "welcome" : messages[index]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, 
                fontWeight: "regular" 
              }}
            >
              {username ? `Welcome back, ${username}!` : messages[index]}
            </Typography>
          </motion.div>
        </AnimatePresence>
        <Typography 
          variant="h5" 
          sx={{ 
            mt: 2, 
            maxWidth: "600px", 
            fontWeight: "light",
            mx: "auto", 
            textShadow: "1px 1px 8px rgba(0,0,0,0.4)" 
          }}
        >
          Transform urban spaces into thriving green farms.
        </Typography>
      </TextContainer>

      {!username && (
        <ButtonWrapper>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 3, fontSize: "1.2rem", padding: "10px 20px" }}
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        </ButtonWrapper>
      )}
    </HeroSectionWrapper>
  );
};

export default HeroSection;
