import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CircularProgress } from "@mui/material";

const AvailableServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://csbackend-jcrz.onrender.com/api/consultations/services");
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Services Provided by CitySprout
      </Typography>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" textAlign="center">{error}</Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    {service.description}
                  </Typography>
                  {service.price && (
                    <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
                      Price: {service.price}
                    </Typography>
                  )}
                  {service.duration && (
                    <Typography variant="body2">Duration: {service.duration}</Typography>
                  )}
                  {service.provider && (
                    <Typography variant="body2">Provider: {service.provider}</Typography>
                  )}
                  {service.contact && (
                    <Typography variant="body2">Contact: {service.contact}</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AvailableServices;
