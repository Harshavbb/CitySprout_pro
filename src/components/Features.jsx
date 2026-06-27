import { useState } from "react";
import { Box, Typography, Container, Collapse, IconButton, Grid, Chip } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const features = [
  { icon: <AgricultureIcon sx={{ fontSize: 80, color: "primary.main" }} />, title: "Farming Recommendations", description: "Intelligent, AI-driven suggestions tailored specifically to your available urban space. Maximize your yield with data-backed planting schedules and soil recommendations." },
  { icon: <MenuBookIcon sx={{ fontSize: 80, color: "secondary.main" }} />, title: "Educational Resources", description: "Access our curated library of masterclasses and guides. Learn the intricacies of hydroponics, vertical farming, and sustainable urban agriculture at your own pace." },
  { icon: <PeopleIcon sx={{ fontSize: 80, color: "success.main" }} />, title: "Community Network", description: "Connect with a thriving local network of urban growers. Share your harvests, trade tips, and participate in community-driven sustainability initiatives." },
  { icon: <BuildIcon sx={{ fontSize: 80, color: "warning.main" }} />, title: "Expert Service Booking", description: "Need an extra pair of hands? Book certified agronomists and urban farming experts to help you design, build, and maintain your green spaces." },
];

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const handleToggle = (index) => setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mb: 8 }}>
          <Chip label="Platform Capabilities" variant="outlined" sx={{ borderColor: "primary.main", color: "primary.main", fontWeight: 600, mb: 3, px: 1, borderRadius: "50px", letterSpacing: "1px", textTransform: "uppercase" }} />
          <Typography variant="h2" sx={{ lineHeight: 1.1, letterSpacing: "-0.03em", color: "text.primary", maxWidth: "700px" }}>
            Everything you need to cultivate a greener future.
          </Typography>
        </Box>

        <Box sx={{ borderTop: "2px solid #182a0c" }}>
          {features.map((feature, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <Box key={index} onClick={() => handleToggle(index)} sx={{ borderBottom: "1px solid #E5E8DF", cursor: "pointer", transition: "background-color 0.3s ease", "&:hover": { backgroundColor: "#FFFFFF" } }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: { xs: 4, md: 5 }, px: { xs: 2, md: 4 } }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography variant="h6" sx={{ color: isExpanded ? "primary.main" : "text.secondary", fontWeight: 400, mr: { xs: 3, md: 6 }, opacity: 0.7 }}>
                      0{index + 1}
                    </Typography>
                    <Typography variant="h3" sx={{ color: isExpanded ? "primary.main" : "text.primary", fontWeight: 500, letterSpacing: "-0.02em", fontSize: { xs: "1.75rem", md: "3rem" }, transition: "color 0.3s ease" }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <IconButton disableRipple sx={{ color: isExpanded ? "primary.main" : "text.primary", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.4s ease, color 0.3s ease" }}>
                    {isExpanded ? <RemoveIcon fontSize="large" /> : <AddIcon fontSize="large" />}
                  </IconButton>
                </Box>

                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <Box sx={{ px: { xs: 2, md: 4 }, pb: { xs: 4, md: 6 } }}>
                    <Grid container spacing={6} alignItems="center">
                      <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.15rem", lineHeight: 1.7, mb: 4, maxWidth: "90%" }}>
                          {feature.description}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", color: "text.primary", "&:hover .arrow": { transform: "translate(4px, -4px)", color: "primary.main" } }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 1, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>
                            Explore Feature
                          </Typography>
                          <ArrowOutwardIcon className="arrow" sx={{ fontSize: 20, transition: "all 0.3s ease" }} />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ width: "100%", height: "250px", backgroundColor: "#F0F2EB", borderRadius: "32px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #E5E8DF" }}>
                          {/* Stripped the shadow, added the 1px border */}
                          <Box sx={{ width: 120, height: 120, borderRadius: "50%", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #E5E8DF" }}>
                            {feature.icon}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;