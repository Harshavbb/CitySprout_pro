import { Box, Typography, Grid, Stack, Chip, Container } from "@mui/material";
import farmingIllustration from "../assets/CTA.jpg"; 

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your free account and explore the platform.",
  },
  {
    number: "02",
    title: "Enter Your Space Details",
    description: "Provide space size, sunlight exposure, and water availability.",
  },
  {
    number: "03",
    title: "Get Recommendations",
    description: "Receive AI-driven suggestions for urban farming methods.",
  },
  {
    number: "04",
    title: "Start Growing",
    description: "Follow step-by-step guides to begin your farming journey.",
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 14, backgroundColor: "#FFFFFF" }}>
      {/* Keeps everything centered on wide screens */}
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          
          {/* Left Side: Editorial Steps */}
          <Grid item xs={12} md={6}>
            <Chip 
              label="The Process" 
              variant="outlined"
              sx={{ 
                borderColor: "primary.main", 
                color: "primary.main", 
                fontWeight: 600, 
                mb: 3,
                px: 1,
                borderRadius: "50px" 
              }} 
            />
            <Typography variant="h2" mb={6} sx={{ lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              How CitySprout Works
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {steps.map((step, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: "flex", 
                    alignItems: "flex-start",
                    py: 4,
                    borderBottom: index !== steps.length - 1 ? "1px solid #E5E8DF" : "none",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateX(8px)" 
                    }
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: "secondary.main", 
                      fontWeight: 300, 
                      mr: { xs: 3, sm: 4 }, 
                      mt: -0.5,
                      minWidth: "50px"
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Box>
                    <Typography variant="h5" mb={1} sx={{ fontWeight: 600, color: "text.primary" }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* Right Side: Structured Image with Floating Badge */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            
            {/* NEW WRAPPER: This anchors the badge to the image properly */}
            <Box sx={{ position: "relative", width: "100%", maxWidth: "500px" }}>
              
              {/* The Image Box */}
              <Box 
                sx={{ 
                  borderRadius: "24px", 
                  overflow: "hidden",
                  border: "1px solid #E5E8DF",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }
                }}
              >
                <img src={farmingIllustration} alt="Farming Process" />
              </Box>

              {/* Floating Premium Badge */}
              <Box 
                sx={{
                  position: "absolute",
                  bottom: { xs: -20, md: 40 },
                  left: { xs: 20, md: -30 },
                  backgroundColor: "background.default",
                  border: "1px solid #E5E8DF",
                  borderRadius: "50px", 
                  py: 2,
                  px: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  zIndex: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)" 
                }}
              >
                <Box 
                  sx={{ 
                    width: 10, 
                    height: 10, 
                    borderRadius: "50%", 
                    backgroundColor: "success.main",
                    boxShadow: "0 0 0 4px rgba(131, 170, 70, 0.2)" 
                  }} 
                />
               
              </Box>
              
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;