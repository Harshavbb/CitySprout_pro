import React from "react";
import { Box, Typography, Container, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SpaceAnalysis from "./SpaceAnalysis";
import AvailableServices from "./AvailableServices";

// Smooth animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Services = () => {
  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
      
      {/* 1. Architectural Drafting Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 6, md: 8 }, 
          pb: { xs: 8, md: 10 }, 
          position: "relative",
          // The Architectural Drafting Grid
          backgroundImage: "linear-gradient(to right, rgba(65, 97, 27, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(65, 97, 27, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          borderBottom: "1px solid #E5E8DF"
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack 
            direction={{ xs: "column", md: "row" }} 
            spacing={8} 
            alignItems="center" 
            justifyContent="space-between"
          >
            
            {/* Left Side: Massive Typography */}
            <Box component={motion.div} variants={staggerContainer} initial="hidden" animate="visible" sx={{ flex: 1.2 }}>
              <motion.div variants={fadeInUp}>
                <Chip 
                  label="Platform Tools" 
                  variant="outlined"
                  sx={{ 
                    borderColor: "primary.main", color: "primary.main", fontWeight: 600, 
                    mb: 4, px: 1, borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px"
                  }} 
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    color: "text.primary", 
                    fontSize: { xs: "3.5rem", sm: "4.5rem", md: "5.5rem" }, 
                    fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.05, mb: 4
                  }}
                >
                  Expert tools for a greener city.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, maxWidth: "500px" }}>
                  {/* Vertical accent line */}
                  <Box sx={{ width: "2px", height: "60px", backgroundColor: "secondary.main", mt: 1 }} />
                  <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.7 }}>
                    Whether you need AI-driven space analysis to maximize your balcony, or certified agronomists to build your rooftop farm, our platform provides the exact tools you need.
                  </Typography>
                </Box>
              </motion.div>
            </Box>

            {/* Right Side: Asymmetrical Image & Spec Card */}
            <Box component={motion.div} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} sx={{ flex: 1, position: "relative", display: "flex", justifyContent: { xs: "center", md: "flex-end" }, width: "100%" }}>
              
              {/* Vertical Pill Image Mask */}
              <Box
                sx={{
                  width: "100%", maxWidth: "380px", height: "550px",
                  borderRadius: "200px", // Perfect pill shape
                  overflow: "hidden", border: "1px solid #E5E8DF", backgroundColor: "#F0F2EB",
                  display: "flex", alignItems: "center", justifyContent: "center", p: 4,
                  position: "relative"
                }}
              >
                <img 
                  src="https://img.freepik.com/free-vector/flat-design-business-communication_52683-76460.jpg?t=st=1741786892~exp=1741790492~hmac=34390791bf70b3994ee51222dd5ceae1f568fe1a3f208a9130cf0c4ddb862d0e&w=1380" 
                  alt="Services Hero" 
                  style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                />
              </Box>

              {/* Overlapping Floating Spec Card */}
              <Box 
                sx={{
                  position: "absolute", bottom: "15%", left: { xs: "0%", md: "-15%" },
                  backgroundColor: "#FFFFFF", border: "1px solid #E5E8DF", borderRadius: "20px",
                  p: 3, display: "flex", flexDirection: "column", gap: 1,
                  boxShadow: "0 24px 48px rgba(0,0,0,0.03)" // Extremely soft lift
                }}
              >
                <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 600, letterSpacing: "1px" }}>
                  Active Modules
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "success.main", boxShadow: "0 0 0 3px rgba(131, 170, 70, 0.2)" }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "text.primary" }}>AI Space Analyzer</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "success.main", boxShadow: "0 0 0 3px rgba(131, 170, 70, 0.2)" }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "text.primary" }}>Expert Booking</Typography>
                </Box>
              </Box>

            </Box>
          </Stack>
        </Container>

        {/* The Scroll Tracker */}
        <Box 
          component={motion.div}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "60px", opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          sx={{
            position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2
          }}
        >
          <Box sx={{ width: "1px", height: "40px", backgroundColor: "primary.main" }} />
          <Box sx={{ width: "24px", height: "24px", backgroundColor: "background.default", border: "1px solid", borderColor: "primary.main", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", mt: "-1px" }}>
            <ArrowDownwardIcon sx={{ fontSize: 14, color: "primary.main" }} />
          </Box>
        </Box>
      </Box>

      {/* 2. The Features Stack */}
      <Box>
        <SpaceAnalysis />
        
        {/* Crisp divider between tools */}
        <Container maxWidth="lg">
          <Box sx={{ borderBottom: "1px solid #E5E8DF" }} />
        </Container>
        
        <AvailableServices />
      </Box>
      
    </Box>
  );
};

export default Services;