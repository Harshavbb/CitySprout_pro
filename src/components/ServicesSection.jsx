import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";

const services = [
  { title: "Setup Hydroponics", description: "Get expert help setting up hydroponic systems." },
  { title: "Greenhouse Installation", description: "Set up a controlled farming environment." }
];

const ServicesSection = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography>{service.description}</Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
