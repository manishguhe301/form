import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const GeoStatusAcquiring = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 2,
      }}
    >
      <CircularProgress />
      <Typography sx={{ mt: 1 }}>Acquiring geolocation</Typography>
    </Box>
  );
};

export default GeoStatusAcquiring;
