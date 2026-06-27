import { Box, Typography, Grid, Chip, Container } from "@mui/material";
import { motion } from "framer-motion";
import farmingIllustration from "../assets/CTA.jpg"; 

const steps = [
  { number: "01", title: "Sign Up", description: "Create your free account and explore the platform." },
  { number: "02", title: "Enter Your Space Details", description: "Provide space size, sunlight exposure, and water availability." },
  { number: "03", title: "Get Recommendations", description: "Receive AI-driven suggestions for urban farming methods." },
  { number: "04", title: "Start Growing", description: "Follow step-by-step guides to begin your farming journey." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const HowItWorks = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        {/* TWEAK: Adjusted grid spacing for mobile */}
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Chip label="The Process" variant="outlined" sx={{ borderColor: "primary.main", color: "primary.main", fontWeight: 600, mb: 3, px: 1, borderRadius: "50px" }} />
            <Typography variant="h2" mb={{ xs: 4, md: 6 }} sx={{ lineHeight: 1.1, letterSpacing: "-0.03em", fontSize: { xs: "2.25rem", md: "3.75rem" } }}>
              How CitySprout Works
            </Typography>

            <Box 
              component={motion.div} 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {steps.map((step, index) => (
                <Box 
                  component={motion.div}
                  variants={itemVariants}
                  key={index} 
                  sx={{ display: "flex", alignItems: "flex-start", py: 4, borderBottom: index !== steps.length - 1 ? "1px solid #E5E8DF" : "none", transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)", "&:hover": { transform: "translateX(8px)" } }}
                >
                  <Typography variant="h3" sx={{ color: "secondary.main", fontWeight: 300, mr: { xs: 2, sm: 4 }, mt: -0.5, minWidth: { xs: "40px", md: "50px" }, fontSize: { xs: "2rem", md: "3rem" } }}>
                    {step.number}
                  </Typography>
                  <Box>
                    <Typography variant="h5" mb={1} sx={{ fontWeight: 600, color: "text.primary", fontSize: { xs: "1.25rem", md: "1.5rem" } }}>{step.title}</Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>{step.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ position: "relative", width: "100%", maxWidth: "500px", mb: { xs: 4, md: 0 } }}>
              <Box sx={{ borderRadius: "24px", overflow: "hidden", border: "1px solid #E5E8DF", "& img": { width: "100%", height: "100%", objectFit: "cover", display: "block" } }}>
                <img src={farmingIllustration} alt="Farming Process" />
              </Box>
              
              {/* TWEAK: Centered badge on Mobile, offset on Desktop */}
              <Box 
                sx={{ 
                  position: "absolute", 
                  bottom: { xs: -25, md: 40 }, 
                  left: { xs: "50%", md: -30 }, 
                  transform: { xs: "translateX(-50%)", md: "none" },
                  backgroundColor: "background.default", 
                  border: "1px solid #E5E8DF", 
                  borderRadius: "50px", 
                  py: 1.5, 
                  px: 3, 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 2, 
                  zIndex: 2,
                  whiteSpace: "nowrap", // Prevents text from breaking onto two lines
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
                }}
              >
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "success.main" }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "text.primary", letterSpacing: "0.5px" }}>
                  Start growing today
                </Typography>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;