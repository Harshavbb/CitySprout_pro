import { Box, Typography, Grid, Link, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AgricultureIcon from "@mui/icons-material/Agriculture";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1B5E20",
        color: "white",
        py: 6,
        mt: 4,
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left: Logo & Mission */}
          <Grid item xs={12} sm={4} textAlign="center">
            <AgricultureIcon sx={{ fontSize: 50, mb: 1 }} />
            <Typography variant="h6" fontWeight="medium" mb={1}>
              CitySprout
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 250, mx: "auto" }}>
              Transforming urban spaces into thriving green hubs for a
              sustainable future.
            </Typography>
          </Grid>

          {/* Middle: Quick Links */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" fontWeight="medium">Quick Links</Typography>
            <Link href="#" color="inherit" display="block" underline="hover">
              Home
            </Link>
            <Link href="#" color="inherit" display="block" underline="hover">
              About
            </Link>
            <Link href="#" color="inherit" display="block" underline="hover">
              Services
            </Link>
            <Link href="#" color="inherit" display="block" underline="hover">
              Blog
            </Link>
          </Grid>

          {/* Right: Contact Info & Social Media */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" fontWeight="medium">Contact Us</Typography>
            <Typography variant="body2">Email: support@citysprout.com</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>Phone: +123 456 7890</Typography>

            {/* Social Media Icons */}
            <Box display="flex" justifyContent="center" gap={2}>
              <Link href="#" color="inherit"><FacebookIcon /></Link>
              <Link href="#" color="inherit"><TwitterIcon /></Link>
              <Link href="#" color="inherit"><InstagramIcon /></Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" textAlign="center" sx={{ mt: 4, opacity: 0.7 }}>
          © {new Date().getFullYear()} CitySprout. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
