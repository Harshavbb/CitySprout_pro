import { Box, Typography, Grid, Container, Chip } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import aboutImage from "./assets/About.png"; 

// Subtle, smooth animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100vh", pb: 12 }}>
      
      {/* 1. Editorial Asymmetrical Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 }, pb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Typography */}
          <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Chip 
                label="Our Story" 
                variant="outlined"
                sx={{ 
                  borderColor: "primary.main", 
                  color: "primary.main", 
                  fontWeight: 600, 
                  mb: 4,
                  px: 1,
                  borderRadius: "50px" 
                }} 
              />
              <Typography 
                variant="h1" 
                sx={{ 
                  color: "text.primary", 
                  fontSize: { xs: "3rem", sm: "4rem", md: "4.5rem" }, 
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  mb: 3
                }}
              >
                Cultivating greener cities, one space at a time.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", maxWidth: "450px", lineHeight: 1.7 }}>
                We believe that every concrete rooftop, empty balcony, and unused lot holds the potential to breathe life back into our urban environments.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Side: Architectural Image Frame */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  height: { xs: "400px", md: "600px" },
                  ml: "auto",
                  borderRadius: "240px 240px 16px 16px", // Elegant arch
                  overflow: "hidden",
                  border: "1px solid #E5E8DF",
                  backgroundColor: "#F0F2EB", 
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 4
                }}
              >
                <img 
                  src={aboutImage} 
                  alt="About CitySprout" 
                  style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* 2. High-Contrast Mission & Vision Block */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Box 
            sx={{ 
              backgroundColor: "text.primary", // Deep green
              color: "#F6F7F2",
              py: { xs: 8, md: 12 },
              px: { xs: 4, md: 8 },
              borderRadius: "32px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)", // Delicate inner frame
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" // Double-line premium effect
            }}
          >
            {/* Ambient Background Glow */}
            <Box 
              sx={{
                position: "absolute", top: "-50%", left: "-10%", width: "600px", height: "600px",
                background: "radial-gradient(circle, rgba(131, 170, 70, 0.15) 0%, rgba(24,42,12,0) 70%)",
                borderRadius: "50%", zIndex: 0
              }}
            />
            
            <Box sx={{ position: "relative", zIndex: 1, maxWidth: "800px", mx: "auto" }}>
              <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 600, letterSpacing: "2px", display: "block", mb: 2 }}>
                Mission & Vision
              </Typography>
              <Typography variant="h4" sx={{ color: "#FFFFFF", mb: 4, lineHeight: 1.4, fontWeight: 400 }}>
                At CitySprout, we aim to transform urban spaces into thriving green farms, promoting sustainability, healthy eating, and community collaboration.
              </Typography>
              <Typography variant="body1" sx={{ color: "info.main", fontSize: "1.1rem" }}>
                Our vision is to make urban farming accessible to everyone, fostering a greener future for our cities and reconnecting people with the food they eat.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. The Platform: "Inverted Hover" Matrix */}
      <Container maxWidth="lg" sx={{ my: 16 }}>
        <Typography variant="h3" sx={{ mb: 6, color: "text.primary", letterSpacing: "-0.02em" }}>
          The Platform
        </Typography>
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <Box sx={{ borderTop: "1px solid #E5E8DF", borderBottom: "1px solid #E5E8DF", backgroundColor: "background.paper", borderRadius: "24px", overflow: "hidden" }}>
            <Grid container>
              {[
                { title: "Join the Community", desc: "Sign up and become a part of the urban farming revolution." },
                { title: "Find or List Spaces", desc: "Discover available urban spaces or list your own for farming." },
                { title: "Grow & Harvest", desc: "Start farming, track your progress, and harvest fresh produce." },
                { title: "Sell or Share", desc: "Sell your harvest in our marketplace or share with the community." },
              ].map((step, index) => (
                <Grid 
                  item 
                  xs={12} 
                  md={3} 
                  key={index}
                  sx={{ 
                    position: "relative",
                    p: { xs: 4, md: 5 },
                    borderRight: { xs: "none", md: index !== 3 ? "1px solid #E5E8DF" : "none" },
                    borderBottom: { xs: index !== 3 ? "1px solid #E5E8DF" : "none", md: "none" },
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                    cursor: "default",
                    "&:hover": {
                      backgroundColor: "text.primary", // Flashes to deep green
                      "& .watermark": { color: "rgba(255, 255, 255, 0.05)" },
                      "& .step-title": { color: "#FFFFFF" },
                      "& .step-desc": { color: "rgba(255, 255, 255, 0.7)" }
                    }
                  }}
                >
                  <motion.div variants={fadeInUp}>
                    {/* Watermark Number */}
                    <Typography 
                      className="watermark"
                      variant="h1" 
                      sx={{ 
                        position: "absolute", 
                        top: 10, 
                        right: 20, 
                        fontSize: "6rem", 
                        fontWeight: 700, 
                        color: "rgba(65, 97, 27, 0.05)", 
                        zIndex: 0,
                        lineHeight: 1,
                        transition: "color 0.4s ease"
                      }}
                    >
                      {index + 1}
                    </Typography>
                    
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      <Typography className="step-title" variant="h5" sx={{ mb: 2, color: "text.primary", fontWeight: 600, transition: "color 0.4s ease" }}>
                        {step.title}
                      </Typography>
                      <Typography className="step-desc" variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6, transition: "color 0.4s ease" }}>
                        {step.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>

      {/* 4. Our Impact: Interactive Ledger */}
      <Container maxWidth="lg" sx={{ my: 16 }}>
        <Typography variant="h3" sx={{ mb: 6, color: "text.primary", letterSpacing: "-0.02em" }}>
          Our Impact
        </Typography>
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {[
              { title: "Sustainability", desc: "Encouraging eco-friendly practices, optimizing water usage, and actively reducing urban carbon footprints." },
              { title: "Community Growth", desc: "Bringing people together through shared urban farming initiatives and local marketplace connections." },
              { title: "Health & Nutrition", desc: "Promoting completely organic farming and ensuring easy access to fresh, pesticide-free food consumption." },
              { title: "Economic Benefits", desc: "Providing lucrative opportunities for local farmers, hobbyists, and small businesses to monetize their spaces." },
            ].map((goal, index) => (
              <motion.div variants={fadeInUp} key={index}>
                <Box 
                  sx={{ 
                    display: "flex", 
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    py: 5,
                    borderTop: "1px solid #E5E8DF",
                    borderBottom: index === 3 ? "1px solid #E5E8DF" : "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": { 
                      backgroundColor: "rgba(255,255,255,0.5)", 
                      pl: { xs: 0, md: 2 }, // Slides content slightly to the right
                      "& .ledger-arrow": {
                        color: "primary.main",
                        transform: "translate(4px, -4px) scale(1.1)"
                      }
                    } 
                  }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ flex: 1, color: "text.primary", fontWeight: 500, mb: { xs: 2, md: 0 }, fontSize: "1.75rem" }}
                  >
                    {goal.title}
                  </Typography>
                  
                  <Box sx={{ flex: 1.5, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography 
                      variant="body1" 
                      sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.6, pr: 4 }}
                    >
                      {goal.desc}
                    </Typography>
                    
                    {/* Interactive Reveal Arrow */}
                    <ArrowOutwardIcon 
                      className="ledger-arrow" 
                      sx={{ 
                        fontSize: 32, 
                        color: "#A3ADA7", 
                        transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)" 
                      }} 
                    />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
      
    </Box>
  );
};

export default AboutPage;