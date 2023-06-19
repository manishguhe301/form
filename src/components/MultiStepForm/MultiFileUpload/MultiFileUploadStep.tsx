import React, { useState, useEffect } from 'react';
import FileInput from './FileInput';
import GeoStatusAcquired from './GeoStatusAcquired';
import GeoStatusAcquiring from './GeoStatusAcquiring';

const MultiFileUploadStep = ({
  formValues,
  setFormValues,
  geoStatus,
  setGeoStatus,
}: any) => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  useEffect(() => {
    if (geoStatus === 'acquiring') {
      const timer = setTimeout(() => {
        setGeoStatus('acquired');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [geoStatus]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FileInput
        formValues={formValues}
        setFormValues={setFormValues}
        fileNames={fileNames}
        setFileNames={setFileNames}
      />
      {geoStatus === 'acquiring' && <GeoStatusAcquiring />}
      {geoStatus === 'acquired' && <GeoStatusAcquired />}
    </div>
  );
};

export default MultiFileUploadStep;
