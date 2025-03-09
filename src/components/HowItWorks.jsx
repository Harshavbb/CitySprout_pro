import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import farmingIllustration from "../assets/farmman-removebg.png"; // Add a relevant illustration

const steps = [
  {
    icon: <LooksOneIcon fontSize="large" color="primary" />,
    title: "Sign Up",
    description: "Create your free account and explore the platform.",
  },
  {
    icon: <LooksTwoIcon fontSize="large" color="secondary" />,
    title: "Enter Your Space Details",
    description: "Provide space size, sunlight exposure, and water availability.",
  },
  {
    icon: <Looks3Icon fontSize="large" color="success" />,
    title: "Get Recommendations",
    description: "Receive AI-driven suggestions for urban farming methods.",
  },
  {
    icon: <Looks4Icon fontSize="large" color="error" />,
    title: "Start Growing & connect with Community",
    description: "Follow step-by-step guides to begin your farming journey.",
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: "center", backgroundColor: "#F4F8EC" }}>
      <Typography variant="h4" fontWeight="meduim" mb={5} color="primary">
        How CitySprout Works
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <img
            src={farmingIllustration}
            alt="Farming Process"
            style={{ width: "100%", maxWidth: "550px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {steps.map((step, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                p: 2,
                boxShadow: 2,
                transition: "0.3s",
                "&:hover": { boxShadow: 5, transform: "scale(1.02)" },
              }}
            >
              <Box sx={{ mr: 2 }}>{step.icon}</Box>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight="medium">
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
