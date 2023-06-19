import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const GeoStatusAcquired = () => {
  return (
    <>
      <Typography sx={{ mt: 1 }}>Geolocation acquired</Typography>
    </>
  );
};
export default GeoStatusAcquired;
