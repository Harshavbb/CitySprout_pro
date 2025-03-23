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
import Blog from "./Blog"; // Placeholder
import Services from "./Services"; // Placeholder
import About from "./About"; // Placeholder

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: { main: "#41611b" },
    secondary: { main: "#83aa46" },
    text: { primary: "#182a0c", secondary: "#5a7442" },
    success: { main: "#99ab5a" },
    warning: { main: "#738b5d" },
    info: { main: "#a9c5dc" },
    action: { hover: "#77923a", selected: "#294710" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box sx={{ paddingTop: "65px", minHeight: "100vh" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Features />
                  <HowItWorks />
                  <CTASection />
                  <Footer />
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
