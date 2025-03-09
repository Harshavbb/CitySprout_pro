import { Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import ctaImage from "../assets/hero-bg.jpg"; // Add a relevant vector image

const CTAContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  backgroundColor: "#fff",
  color: "#333",
  padding: "60px 40px",
  borderRadius: "12px",
  textAlign: "left",
  maxWidth: "1200px",
  margin: "auto",
  boxShadow: "0px 10px 20px rgba(14, 133, 18, 0.2)",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    padding: "40px 20px",
  },
}));

const CTASection = () => {
  return (
    <Box sx={{ py: 10, display: "flex", justifyContent: "center" }}>
      <CTAContainer>
        {/* Text Content */}
        <Box sx={{ maxWidth: "600px" }}>
          <Typography variant="h4" fontWeight="medium" gutterBottom>
            Ready to Transform Your Urban Space?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Start your journey with CitySprout today and turn unused spaces into thriving farms. 
            Join the movement towards sustainability and food security!
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              sx={{ fontWeight: "medium" }}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large" 
              sx={{
                borderColor: "#fff",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>

        {/* Image */}
        <Box sx={{ maxWidth: "350px", display: { xs: "none", md: "block" } }}>
          <img
            src={ctaImage}
            alt="Join CitySprout"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </CTAContainer>
    </Box>
  );
};

export default CTASection;
