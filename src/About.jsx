import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import aboutImage from "./assets/about.jpg"; // Add an appropriate image

// Styled Section Wrapper (Full Width)
const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "80px 5%",
  textAlign: "center",
}));

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section (Full Width) */}
      <Box
        sx={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          width: "100%",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)", // Dark overlay
          },
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          component={motion.h2}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          sx={{ position: "relative", zIndex: 1 }}
        >
          About CitySprout
        </Typography>
      </Box>

      {/* Mission & Vision Section */}
      <SectionWrapper sx={{ backgroundColor: "#f9f9f9" }}>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Mission & Vision
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "80%", margin: "0 auto" }}>
            At CitySprout, we aim to transform urban spaces into thriving green farms, promoting sustainability,
            healthy eating, and community collaboration. Our vision is to make urban farming accessible to everyone,
            fostering a greener future for our cities.
          </Typography>
        </motion.div>
      </SectionWrapper>

      {/* How It Works Section (Full Width) */}
      <SectionWrapper sx={{ backgroundColor: "#fff" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {[
            { title: "Join the Community", desc: "Sign up and become a part of the urban farming revolution." },
            { title: "Find or List Spaces", desc: "Discover available urban spaces or list your own for farming." },
            { title: "Grow & Harvest", desc: "Start farming, track your progress, and harvest fresh produce." },
            { title: "Sell or Share", desc: "Sell your harvest in our marketplace or share with the community." },
          ].map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card sx={{ minHeight: 180, boxShadow: 2, width: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {step.title}
                    </Typography>
                    <Typography variant="body2">{step.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Impact & Goals Section (Full Width) */}
      <SectionWrapper sx={{ backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Impact & Goals
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {[
            { title: "Sustainability", desc: "Encouraging eco-friendly practices and reducing carbon footprints." },
            { title: "Community Growth", desc: "Bringing people together through shared urban farming initiatives." },
            { title: "Health & Nutrition", desc: "Promoting organic farming and fresh food consumption." },
            { title: "Economic Benefits", desc: "Providing opportunities for local farmers and small businesses." },
          ].map((goal, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card sx={{ minHeight: 180, boxShadow: 2, width: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {goal.title}
                    </Typography>
                    <Typography variant="body2">{goal.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </Box>
  );
};

export default AboutPage;
