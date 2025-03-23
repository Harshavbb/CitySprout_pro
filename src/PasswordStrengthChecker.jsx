import React, { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";

const PasswordStrengthChecker = ({ password, setPassword }) => {
  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++; // Fixed regex for special characters
    return strength;
  };

  const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];
  const strength = getPasswordStrength(password);

  return (
    <Box>
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Typography variant="body2" color={strength < 3 ? "error" : "success"}>
        Strength: {strength > 0 ? strengthLabels[strength] : "Weak"}
      </Typography>
    </Box>
  );
};

export default PasswordStrengthChecker;
