import { useState } from "react";
import { Box, Button, Typography, Select, MenuItem, CircularProgress, Card, CardMedia, CardContent } from "@mui/material";
import axios from "axios";

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
      const response = await axios.post("https://csbackend-jcrz.onrender.com/api/farming/upload", formData);
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
      const response = await axios.post("https://csbackend-jcrz.onrender.com/api/farming/detect", {
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

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", textAlign: "center", p: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Space Analysis
      </Typography>
      <Button variant="contained" component="label" color="primary" sx={{ mt: 2 }}>
        Upload Image
        <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
      </Button>

      {imageUrl && (
        <Card sx={{ mt: 3 }}>
          <CardMedia component="img" height="200" image={imageUrl} alt="Uploaded" />
        </Card>
      )}

      <Select fullWidth value={sunlight} onChange={(e) => setSunlight(e.target.value)} sx={{ mt: 2 }}>
        <MenuItem value="High Sunlight">High Sunlight</MenuItem>
        <MenuItem value="Medium Sunlight">Medium Sunlight</MenuItem>
        <MenuItem value="Low Sunlight">Low Sunlight</MenuItem>
      </Select>

      <Select fullWidth value={waterAvailability} onChange={(e) => setWaterAvailability(e.target.value)} sx={{ mt: 2 }}>
        <MenuItem value="Directly Available">Directly Available</MenuItem>
        <MenuItem value="Limited Availability">Limited Availability</MenuItem>
        <MenuItem value="Needs Watering System">Needs Watering System</MenuItem>
      </Select>

      <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }} onClick={handleAnalyzeSpace} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Analyze Space"}
      </Button>

      {analysisResult && (
        <Card sx={{ mt: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h6">Analysis Result:</Typography>
            <Typography variant="body2">{JSON.stringify(analysisResult, null, 2)}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default SpaceAnalysis;
