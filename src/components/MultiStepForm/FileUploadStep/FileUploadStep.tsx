import React, { useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadStep = ({ formValues, setFormValues }: any) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: any) => {
    setFormValues({ ...formValues, file: e.target.files[0] });
    setFileName(e.target.files[0].name);
  };

  return (
    <>
      <input
        accept='.png,.pdf'
        style={{ display: 'none' }}
        id='contained-button-file'
        type='file'
        onChange={handleFileChange}
      />
      <label htmlFor='contained-button-file'>
        <Tooltip title={fileName || 'No file uploaded'}>
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

export default FileUploadStep;
