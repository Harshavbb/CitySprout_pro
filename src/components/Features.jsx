import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";

const features = [
  {
    icon: <AgricultureIcon fontSize="large" color="primary" />,
    title: "Farming Recommendations",
    description: "AI-driven suggestions based on your available space.",
  },
  {
    icon: <MenuBookIcon fontSize="large" color="secondary" />,
    title: "Educational Resources",
    description: "Guides on hydroponics, vertical farming, and more.",
  },
  {
    icon: <PeopleIcon fontSize="large" color="success" />,
    title: "Community Blog",
    description: "Share your experiences & learn from others.",
  },
  {
    icon: <BuildIcon fontSize="large" color="error" />,
    title: "Service Booking",
    description: "Get professional help to start your farm.",
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 6, px: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="regular" mb={4}>
        Why Choose CitySprout?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ p: 2, boxShadow: 3 }}>
              <CardContent>
                {feature.icon}
                <Typography variant="h6" fontWeight="medium" mt={2}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
