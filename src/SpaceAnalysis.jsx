import { useState } from "react";
import { Box, Button, Typography, Select, MenuItem, CircularProgress, Container, FormControl, InputLabel, Chip } from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import axios from "axios";
import API_URL from "./config/api";

const SpaceAnalysis = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [waterAvailability, setWaterAvailability] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem("userId"); 

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setImage(file);
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/farming/upload`, formData);
      setImageUrl(response.data.url);
    } catch (error) {
      console.error("Error uploading image", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeSpace = async () => {
    if (!imageUrl || !sunlight || !waterAvailability) {
      alert("Please upload an image and enter all details");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/farming/detect`, {
        image_url: imageUrl,
        sunlight,
        water_availability: waterAvailability,
        user_id: userId,
      });
      setAnalysisResult(response.data);
    } catch (error) {
      console.error("Error analyzing space", error);
    } finally {
      setLoading(false);
    }
  };

  // Premium Pill-shaped Dropdown Styling
  const selectStyles = {
    borderRadius: "50px",
    backgroundColor: "#F6F7F2",
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E5E8DF", transition: "all 0.3s ease" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main", borderWidth: "1px" },
  };

  return (
    <Box sx={{ minHeight: "85vh", py: { xs: 8, md: 10 }, backgroundColor: "background.default", position: "relative", overflow: "hidden" }}>
      
      {/* Ambient Background Orbs */}
      <Box sx={{ position: "absolute", top: "-10%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(131, 170, 70, 0.15) 0%, rgba(246,247,242,0) 70%)", zIndex: 0, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "-10%", right: "-10%", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(169, 197, 220, 0.15) 0%, rgba(246,247,242,0) 70%)", zIndex: 0, pointerEvents: "none" }} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 600, letterSpacing: "2px" }}>
            AI Assistant
          </Typography>
          <Typography variant="h2" sx={{ color: "text.primary", fontWeight: 500, letterSpacing: "-0.03em", mt: 1 }}>
            Space Analysis
          </Typography>
        </Box>

        {/* The Floating Tool Card */}
        <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "32px", border: "1px solid #E5E8DF", overflow: "hidden", display: "flex", flexDirection: { xs: "column", md: "row" }, boxShadow: "0 24px 48px rgba(0,0,0,0.03)" }}>
          
          {/* Left Side: Input Form */}
          <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, borderRight: { xs: "none", md: "1px solid #E5E8DF" } }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: "text.primary" }}>
              Configure Parameters
            </Typography>

            {/* Custom Upload Dropzone */}
            <Box 
              component="label"
              sx={{ 
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                width: "100%", height: "140px", border: "2px dashed #E5E8DF", borderRadius: "20px",
                backgroundColor: "#F6F7F2", cursor: "pointer", transition: "all 0.3s ease", mb: 4,
                "&:hover": { borderColor: "primary.main", backgroundColor: "#F0F2EB" }
              }}
            >
              <CloudUploadOutlinedIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary" }}>
                {image ? image.name : "Click to upload space image"}
              </Typography>
              <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
            </Box>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="sunlight-label" sx={{ transform: "translate(14px, -9px) scale(0.75)", backgroundColor: "#FFFFFF", px: 1 }}>Sunlight Exposure</InputLabel>
              <Select labelId="sunlight-label" value={sunlight} onChange={(e) => setSunlight(e.target.value)} sx={selectStyles}>
                <MenuItem value="High Sunlight">High Sunlight</MenuItem>
                <MenuItem value="Medium Sunlight">Medium Sunlight</MenuItem>
                <MenuItem value="Low Sunlight">Low Sunlight</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel id="water-label" sx={{ transform: "translate(14px, -9px) scale(0.75)", backgroundColor: "#FFFFFF", px: 1 }}>Water Availability</InputLabel>
              <Select labelId="water-label" value={waterAvailability} onChange={(e) => setWaterAvailability(e.target.value)} sx={selectStyles}>
                <MenuItem value="Directly Available">Directly Available</MenuItem>
                <MenuItem value="Limited Availability">Limited Availability</MenuItem>
                <MenuItem value="Needs Watering System">Needs Watering System</MenuItem>
              </Select>
            </FormControl>

            <Button 
              variant="contained" 
              fullWidth 
              onClick={handleAnalyzeSpace} 
              disabled={loading || !imageUrl || !sunlight || !waterAvailability}
              startIcon={!loading && <AutoAwesomeIcon />}
              sx={{ 
                py: 1.5, backgroundColor: "text.primary", color: "#FFFFFF", borderRadius: "50px", fontSize: "1rem", boxShadow: "none",
                "&:hover": { backgroundColor: "action.hover", boxShadow: "none" },
                "&:disabled": { backgroundColor: "#E5E8DF" }
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Analyze Space"}
            </Button>
          </Box>

          {/* Right Side: Visuals & Results */}
          <Box sx={{ flex: 1, backgroundColor: "#F0F2EB", p: { xs: 4, md: 6 }, display: "flex", flexDirection: "column" }}>
            
            {imageUrl ? (
              <Box sx={{ width: "100%", height: "200px", borderRadius: "20px", overflow: "hidden", border: "1px solid #E5E8DF", mb: 4, backgroundColor: "#FFFFFF", flexShrink: 0 }}>
                <img src={imageUrl} alt="Uploaded Space" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            ) : (
              <Box sx={{ width: "100%", height: "200px", borderRadius: "20px", border: "1px dashed #A3ADA7", display: "flex", alignItems: "center", justifyContent: "center", mb: 4, flexShrink: 0 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>Image preview will appear here</Typography>
              </Box>
            )}

            {analysisResult ? (
              <Box sx={{ flex: 1, backgroundColor: "text.primary", borderRadius: "20px", p: { xs: 3, md: 4 }, display: "flex", flexDirection: "column" }}>
                
                {/* Spec Sheet Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, pb: 2, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <Typography variant="overline" sx={{ color: "secondary.main", letterSpacing: "2px", fontWeight: 600 }}>
                    Diagnostic Complete
                  </Typography>
                  {analysisResult.analysis?.confidence_score && (
                    <Chip
                      label={`${Math.round(analysisResult.analysis.confidence_score * 100)}% Match`}
                      size="small"
                      sx={{ 
                        backgroundColor: "rgba(131, 170, 70, 0.2)", 
                        color: "secondary.main", 
                        fontWeight: 600, 
                        border: "1px solid rgba(131, 170, 70, 0.3)" 
                      }}
                    />
                  )}
                </Box>

                {/* Structured Data Rows */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: "rgba(246, 247, 242, 0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", mb: 0.5 }}>
                      Identified Space Profile
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#FFFFFF", fontWeight: 500 }}>
                      {analysisResult.analysis?.space_type || "Unknown Space"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" sx={{ color: "rgba(246, 247, 242, 0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", mb: 0.5 }}>
                      Primary Strategy
                    </Typography>
                    <Typography variant="h5" sx={{ color: "secondary.main", fontWeight: 500 }}>
                      {analysisResult.analysis?.primary_recommendation || "Pending"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" sx={{ color: "rgba(246, 247, 242, 0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", mb: 1.5 }}>
                      Optimal Yields
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {analysisResult.analysis?.suitable_crops?.map((crop, idx) => (
                        <Chip
                          key={idx}
                          label={crop}
                          sx={{
                            backgroundColor: "#FFFFFF",
                            color: "text.primary",
                            fontWeight: 600,
                            borderRadius: "8px",
                          }}
                        />
                      )) || <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>No crops identified.</Typography>}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box sx={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "20px", border: "1px solid #E5E8DF", display: "flex", alignItems: "center", justifyContent: "center", p: 3, textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Upload an image and set your parameters to generate an intelligent farming strategy.
                </Typography>
              </Box>
            )}

          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default SpaceAnalysis;