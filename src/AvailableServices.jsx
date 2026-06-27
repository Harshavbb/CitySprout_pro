import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, CircularProgress, Container, Chip, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import API_URL from "./config/api";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const AvailableServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/consultations/services`);
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
    <Box sx={{ minHeight: "85vh", py: { xs: 8, md: 14 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        
        {/* Section Header */}
        <Box sx={{ mb: 8 }}>
          <Chip 
            label="Expert Consultations" 
            variant="outlined"
            sx={{ 
              borderColor: "primary.main", color: "primary.main", fontWeight: 600, 
              mb: 3, px: 1, borderRadius: "50px", letterSpacing: "1px", textTransform: "uppercase"
            }} 
          />
          <Typography variant="h2" sx={{ color: "text.primary", fontWeight: 500, letterSpacing: "-0.03em", mb: 2 }}>
            Professional Urban Farming Services
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", maxWidth: "600px", lineHeight: 1.6 }}>
            Book certified agronomists and landscape experts to help you design, build, and maintain your green spaces.
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress sx={{ color: "primary.main" }} />
          </Box>
        ) : error ? (
          <Typography color="error" variant="h6">{error}</Typography>
        ) : (
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <Box sx={{ borderTop: "2px solid #182a0c" }}>
              {services.map((service, index) => (
                <motion.div variants={fadeInUp} key={index}>
                  <Box 
                    sx={{ 
                      py: { xs: 4, md: 5 },
                      px: { xs: 2, md: 4 },
                      borderBottom: "1px solid #E5E8DF",
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { xs: "flex-start", md: "center" },
                      gap: 4,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": { 
                        backgroundColor: "#FFFFFF", 
                        pl: { xs: 2, md: 6 }, // Smooth slide interaction
                        "& .service-arrow": { color: "primary.main", transform: "translate(4px, -4px)" }
                      }
                    }}
                  >
                    {/* Left: Provider Avatar (Optional visual anchor) */}
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                      <Avatar sx={{ width: 64, height: 64, backgroundColor: "#F0F2EB", color: "primary.main", border: "1px solid #E5E8DF" }}>
                        <PersonOutlineOutlinedIcon fontSize="large" />
                      </Avatar>
                    </Box>

                    {/* Middle: Core Information */}
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h4" sx={{ color: "text.primary", fontWeight: 600, mb: 1, fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
                        {service.name}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6, maxWidth: "90%" }}>
                        {service.description}
                      </Typography>

                      {/* Metadata Grid */}
                      <Grid container spacing={2}>
                        {service.provider && (
                          <Grid item xs={6} md={3} sx={{ display: "flex", alignItems: "center", color: "text.primary", gap: 1 }}>
                            <PersonOutlineOutlinedIcon fontSize="small" sx={{ opacity: 0.6 }} />
                            <Typography variant="body2" fontWeight={500}>{service.provider}</Typography>
                          </Grid>
                        )}
                        {service.price && (
                          <Grid item xs={6} md={3} sx={{ display: "flex", alignItems: "center", color: "text.primary", gap: 1 }}>
                            <PaymentsOutlinedIcon fontSize="small" sx={{ opacity: 0.6 }} />
                            <Typography variant="body2" fontWeight={500}>{service.price}</Typography>
                          </Grid>
                        )}
                        {service.duration && (
                          <Grid item xs={6} md={3} sx={{ display: "flex", alignItems: "center", color: "text.primary", gap: 1 }}>
                            <AccessTimeOutlinedIcon fontSize="small" sx={{ opacity: 0.6 }} />
                            <Typography variant="body2" fontWeight={500}>{service.duration}</Typography>
                          </Grid>
                        )}
                        {service.contact && (
                          <Grid item xs={6} md={3} sx={{ display: "flex", alignItems: "center", color: "text.primary", gap: 1 }}>
                            <EmailOutlinedIcon fontSize="small" sx={{ opacity: 0.6 }} />
                            <Typography variant="body2" fontWeight={500} sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {service.contact}
                            </Typography>
                          </Grid>
                        )}
                      </Grid>
                    </Box>

                    {/* Right: Interaction Arrow */}
                    <Box sx={{ display: "flex", alignItems: "center", alignSelf: { xs: "flex-start", md: "center" } }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", mr: 1, color: "text.primary" }}>
                        Book Now
                      </Typography>
                      <ArrowOutwardIcon className="service-arrow" sx={{ fontSize: 28, color: "text.secondary", transition: "all 0.3s ease" }} />
                    </Box>

                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default AvailableServices;