import { Box, Typography, Grid, Link, Container, Divider, InputBase, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "text.primary", // #182a0c
        color: "#F6F7F2",
        pt: 12,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} mb={8}>
          {/* Left: Logo & Mission */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <AgricultureIcon sx={{ fontSize: 36, mr: 1.5, color: "secondary.main" }} />
              <Typography variant="h5" fontWeight="600" letterSpacing="-0.5px">
                CitySprout
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: "rgba(246, 247, 242, 0.7)", maxWidth: "90%", lineHeight: 1.7 }}>
              Transforming urban spaces into thriving green hubs for a
              sustainable, food-secure future.
            </Typography>
          </Grid>

          {/* Middle: Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="500" mb={3}>Platform</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {['Home', 'About', 'Services', 'Blog'].map((text) => (
                <Link key={text} href="#" underline="none" sx={{ color: "rgba(246, 247, 242, 0.7)", "&:hover": { color: "#FFF" } }}>
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Middle: Connect */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="500" mb={3}>Connect</Typography>
            <Typography variant="body1" sx={{ color: "rgba(246, 247, 242, 0.7)", mb: 1 }}>support@citysprout.com</Typography>
            <Typography variant="body1" sx={{ color: "rgba(246, 247, 242, 0.7)", mb: 4 }}>+123 456 7890</Typography>

            <Box display="flex" gap={2}>
              <Link href="#" sx={{ color: "rgba(246, 247, 242, 0.7)", "&:hover": { color: "#FFF" } }}><FacebookIcon /></Link>
              <Link href="#" sx={{ color: "rgba(246, 247, 242, 0.7)", "&:hover": { color: "#FFF" } }}><TwitterIcon /></Link>
              <Link href="#" sx={{ color: "rgba(246, 247, 242, 0.7)", "&:hover": { color: "#FFF" } }}><InstagramIcon /></Link>
            </Box>
          </Grid>

          {/* Right: Newsletter (Editorial Touch) */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="500" mb={3}>Stay Updated</Typography>
            <Typography variant="body2" sx={{ color: "rgba(246, 247, 242, 0.7)", mb: 2 }}>
              Get the latest urban farming tips delivered to your inbox.
            </Typography>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                borderBottom: "1px solid rgba(246, 247, 242, 0.3)",
                pb: 1,
                "&:focus-within": { borderBottomColor: "secondary.main" }
              }}
            >
              <InputBase
                placeholder="Email address"
                sx={{ color: "#F6F7F2", flex: 1, fontSize: "0.95rem" }}
              />
              <IconButton size="small" sx={{ color: "secondary.main" }}>
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(246, 247, 242, 0.1)", mb: 4 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="body2" sx={{ color: "rgba(246, 247, 242, 0.5)" }}>
            © {new Date().getFullYear()} CitySprout. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(246, 247, 242, 0.5)" }}>
            Designed for a greener tomorrow.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;