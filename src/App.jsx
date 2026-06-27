import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./components/Profile";
import Blog from "./Blog"; 
import Services from "./Services"; 
import About from "./About"; 

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h2: { fontWeight: 500, letterSpacing: "-0.03em", color: "#182a0c" }, // Editorial, tight headings
    h4: { fontWeight: 500, letterSpacing: "-0.02em", color: "#182a0c" },
    h6: { fontWeight: 600, color: "#182a0c" },
    body1: { color: "#5a7442", lineHeight: 1.7 }, // Breathable body text
    body2: { color: "#5a7442", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 500, letterSpacing: "0.5px" },
  },
  palette: {
    primary: { main: "#41611b" },
    secondary: { main: "#83aa46" },
    text: { primary: "#182a0c", secondary: "#5a7442" },
    success: { main: "#99ab5a" },
    warning: { main: "#738b5d" },
    info: { main: "#a9c5dc" },
    action: { hover: "#77923a", selected: "#294710" },
    background: {
      default: "#F6F7F2", // Luxe, warm off-white canvas
      paper: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 20, // Softer, more modern corners for large elements
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Pill-shaped buttons
          boxShadow: "none",
          padding: "10px 28px",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "#294710", // Using your selected action color
          },
        },
        outlined: {
          borderWidth: "1.5px",
          "&:hover": { borderWidth: "1.5px" },
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none", // Removing techy drop shadows
          border: "1px solid #E5E8DF", // Crisp, editorial borders
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Main wrapper configured as a Flex column to push Footer down */}
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar />
          
          {/* Content Wrapper takes up available space (flexGrow: 1) */}
          <Box sx={{ paddingTop: "65px", flexGrow: 1 }}>
            <Routes>
              {/* Home Route (Footer removed from here) */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <Features />
                    <HowItWorks />
                    <CTASection />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Box>
          
          {/* Footer moved outside the Routes so it renders globally */}
          <Footer />
          
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;