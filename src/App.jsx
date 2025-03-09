import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";


// Create a Material UI Theme with your custom color palette
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#41611b", // Eco-friendly green for primary actions
    },
    secondary: {
      main: "#83aa46", // Vibrant green for secondary actions
    },
    text: {
      primary: "#182a0c", // Dark green for text
      secondary: "#5a7442", // Muted green for subtitles
    },
    success: {
      main: "#99ab5a",
    },
    warning: {
      main: "#738b5d",
    },
    info: {
      main: "#a9c5dc", // Soft blue for informational elements
    },
    action: {
      hover: "#77923a", // Slightly darker green for hover effects
      selected: "#294710", // Darker shade for selected items
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <CTASection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
