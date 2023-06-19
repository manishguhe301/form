import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileInput = ({ formValues, setFormValues, fileNames, setFileNames }) => {
  const handleFileChange = (e: any) => {
    if (e.target.files.length > 5) {
      alert('You can only upload a maximum of 5 files');
      return;
    }
    setFormValues({ ...formValues, files: e.target.files });
    setFileNames(Array.from(e.target.files).map((file: any) => file.name));
  };

  return (
    <>
      <input
        accept='.png,.pdf'
        style={{ display: 'none' }}
        id='contained-button-file'
        multiple
        type='file'
        onChange={handleFileChange}
      />
      <label htmlFor='contained-button-file'>
        <Tooltip title={fileNames.join(', ') || 'No files uploaded'}>
          <Button
            variant='contained'
            component='span'
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </Tooltip>
      </label>
    </>
  );
};

export default FileInput;
