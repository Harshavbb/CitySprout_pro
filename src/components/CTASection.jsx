import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ctaImage from "../assets/HowitWorks.jpg"; 

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 12, px: { xs: 2, sm: 4 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Box 
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "text.primary", // Deepest green (#182a0c)
            color: "#F6F7F2",
            padding: { xs: "40px 24px", md: "80px 64px" },
            borderRadius: "32px", 
            position: "relative",
          }}
        >
          {/* Text Content */}
          <Box sx={{ maxWidth: "500px", position: "relative", zIndex: 2 }}>
            <Typography 
              variant="overline" 
              sx={{ color: "secondary.main", fontWeight: 600, letterSpacing: "2px", display: "block", mb: 2 }}
            >
              Take Action
            </Typography>
            <Typography variant="h2" sx={{ color: "#FFFFFF", mb: 3, letterSpacing: "-0.03em" }}>
              Ready to Transform Your Urban Space?
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(246, 247, 242, 0.8)", mb: 5, fontSize: "1.1rem" }}>
              Start your journey with CitySprout today and turn unused spaces into thriving farms. 
              Join the movement towards sustainability and food security.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  backgroundColor: "secondary.main", 
                  color: "#182a0c",
                  "&:hover": { backgroundColor: "success.main" }
                }}
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                sx={{
                  borderColor: "rgba(246, 247, 242, 0.5)",
                  color: "#F6F7F2",
                  "&:hover": { borderColor: "#FFFFFF", color: "#FFFFFF" },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>

          {/* Architectural Image Motif */}
          <Box 
            sx={{ 
              maxWidth: "380px", 
              display: { xs: "none", md: "block" }, 
              position: "relative",
              zIndex: 2
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "450px",
                borderRadius: "200px 200px 16px 16px", // Matching the Hero Arch
                overflow: "hidden",
                border: "1px solid #738b5d", // Fine, crisp border instead of a thick one
              }}
            >
              <img
                src={ctaImage}
                alt="Join CitySprout"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;