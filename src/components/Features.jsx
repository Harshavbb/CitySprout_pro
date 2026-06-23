import { Box, Typography, Grid, Card, CardContent, Chip, Stack } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const features = [
  {
    icon: <AgricultureIcon sx={{ fontSize: 36, color: "primary.main" }} />,
    tag: "AI Powered",
    title: "Farming Recommendations",
    description: "Intelligent suggestions tailored specifically to your available urban space, ensuring maximum yield and sustainability.",
    gridSpan: { xs: 12, md: 7 }, // Wide card
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    tag: "Learn",
    title: "Educational Resources",
    description: "Curated guides on hydroponics, vertical farming, and sustainable practices.",
    gridSpan: { xs: 12, md: 5 }, // Square card
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 36, color: "success.main" }} />,
    tag: "Connect",
    title: "Community Blog",
    description: "Share your harvests, experiences, and learn from local growers in your city.",
    gridSpan: { xs: 12, md: 5 }, // Square card
  },
  {
    icon: <BuildIcon sx={{ fontSize: 36, color: "warning.main" }} />,
    tag: "Support",
    title: "Service Booking",
    description: "Get professional, hands-on help from certified agronomists to build and maintain your urban farm.",
    gridSpan: { xs: 12, md: 7 }, // Wide card
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 14, px: { xs: 2, sm: 4 }, backgroundColor: "background.default" }}>
      {/* Section Header */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", mb: 8, textAlign: "center" }}>
        <Chip 
          label="Our Solutions" 
          variant="outlined"
          sx={{ 
            borderColor: "primary.main", 
            color: "primary.main", 
            fontWeight: 600, 
            mb: 3,
            px: 1
          }} 
        />
        <Typography variant="h2" sx={{ maxWidth: "600px", mx: "auto", lineHeight: 1.2 }}>
          Intelligent tools for the modern urban grower.
        </Typography>
      </Box>

      {/* Asymmetric Bento Grid */}
      <Grid container spacing={3} justifyContent="center" maxWidth="1200px" mx="auto">
        {features.map((feature, index) => (
          <Grid item xs={feature.gridSpan.xs} md={feature.gridSpan.md} key={index}>
            <Card 
              sx={{ 
                height: "100%", 
                p: { xs: 3, md: 4 }, // Generous padding
                display: "flex", 
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
                backgroundColor: "background.paper",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": { 
                  borderColor: "primary.main",
                  backgroundColor: "#FAFAFA", // Very subtle shift on hover
                  "& .hover-arrow": {
                    transform: "translate(4px, -4px)",
                    color: "primary.main"
                  }
                }
              }}
            >
              {/* Card Header: Icon & Tag */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 6 }}>
                <Box 
                  sx={{ 
                    p: 2, 
                    borderRadius: "20px", // Squircle shape for icons
                    backgroundColor: "background.default", 
                    display: "flex",
                    border: "1px solid #E5E8DF"
                  }}
                >
                  {feature.icon}
                </Box>
                
                {/* Pill Tag */}
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontWeight: 600, 
                    color: "text.secondary", 
                    textTransform: "uppercase", 
                    letterSpacing: "1px",
                    border: "1px solid #E5E8DF",
                    borderRadius: "50px",
                    px: 1.5,
                    py: 0.5
                  }}
                >
                  {feature.tag}
                </Typography>
              </Box>

              {/* Card Body */}
              <CardContent sx={{ p: 0, mt: "auto", position: "relative" }}>
                <Typography variant="h4" mb={2} sx={{ fontSize: "1.5rem" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: "90%" }}>
                  {feature.description}
                </Typography>

                {/* Decorative Arrow for Interaction */}
                <Box 
                  className="hover-arrow"
                  sx={{ 
                    position: "absolute", 
                    bottom: 0, 
                    right: 0, 
                    color: "text.secondary",
                    transition: "all 0.3s ease" 
                  }}
                >
                  <ArrowOutwardIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;