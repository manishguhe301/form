import React from 'react';
import Grid from '@mui/material/Grid';
import NameField from './NameField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';

const BasicDetailsStep = ({ formValues, setFormValues }: any) => {
  return (
    <Grid container spacing={2}>
      <NameField formValues={formValues} setFormValues={setFormValues} />
      <EmailField formValues={formValues} setFormValues={setFormValues} />
      <PhoneField formValues={formValues} setFormValues={setFormValues} />
    </Grid>
  );
};

export default BasicDetailsStep;
