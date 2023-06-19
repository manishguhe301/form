import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddressLine1Field from './AddressLine1Field';
import AddressLine2Field from './AddressLine2Field';
import CityField from './CityField';
import CountryField from './CountryField';
import PincodeField from './PincodeField';
import StateField from './StateField';

const AddressStep = ({ formValues, setFormValues }: any) => {
  return (
    <Grid container spacing={2}>
      <AddressLine1Field
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <AddressLine2Field
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <CityField formValues={formValues} setFormValues={setFormValues} />
      <StateField formValues={formValues} setFormValues={setFormValues} />
      <PincodeField formValues={formValues} setFormValues={setFormValues} />
      <CountryField formValues={formValues} setFormValues={setFormValues} />
    </Grid>
  );
};

export default AddressStep;
