import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-bg.jpg";

// Styled Component for the Hero Section
const HeroSectionWrapper = styled(Box)({
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, rgba(0, 50, 0, 0.5), rgba(0, 0, 0, 0.7))", // Smooth gradient overlay
  },
});

// Styled Component for Content
const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 1,
  maxWidth: "700px",
  padding: "20px",
});

// Motion Variants for Animations
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroContent
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography
          variant="h2"
          fontWeight="regular"
          gutterBottom
          component={motion.h2}
          variants={itemVariants}
          sx={{ letterSpacing: "1px", textShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}
        >
          Welcome to CitySprout
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 3 }}
          component={motion.p}
          variants={itemVariants}
        >
          Transform Urban Spaces into Thriving Green Farms
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            color="success"
            size="large"
            component={motion.button}
            variants={itemVariants}
            whileHover={{ scale: 1.1, x: 5 }} // Interactive hover effect
          >
            Get Started ➜
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            component={motion.button}
            variants={itemVariants}
            whileHover={{ scale: 1.1, x: -5 }} // Slight move effect on hover
          >
            Learn More
          </Button>
        </Box>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
