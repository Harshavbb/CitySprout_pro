import { Container, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Container sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        About CitySprout    
      </Typography>
      <Typography variant="body1">
        CitySprout helps transform urban spaces into sustainable food-growing hubs, reducing food scarcity and promoting eco-friendly practices.
      </Typography>
    </Container>
  );
};

export default AboutSection;
