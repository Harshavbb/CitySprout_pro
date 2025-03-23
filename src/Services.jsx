import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import SpaceAnalysis from "./SpaceAnalysis";
import AvailableServices from "./AvailableServices";

const Services = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            component="img"
            src="https://img.freepik.com/free-vector/flat-design-business-communication_52683-76460.jpg?t=st=1741786892~exp=1741790492~hmac=34390791bf70b3994ee51222dd5ceae1f568fe1a3f208a9130cf0c4ddb862d0e&w=1380"
            alt="Hero Section"
            sx={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "contain",
              mt: 3,
              borderRadius: 2,
            }}
          />
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Space Analysis Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, textAlign: "center" }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Space Analysis
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                Upload a photo and get AI-powered insights for your gardening space.
              </Typography>
              <SpaceAnalysis />
            </Paper>
          </Grid>
          
          {/* Available Services Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, textAlign: "center" }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Services
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                Discover how CitySprout can help you achieve a greener future.
              </Typography>
              <AvailableServices />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
