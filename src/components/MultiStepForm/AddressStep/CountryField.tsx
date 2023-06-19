import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const CountryField = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label='Country'
        value={formValues.country}
        onChange={(e) =>
          setFormValues({ ...formValues, country: e.target.value })
        }
        type='text'
      />
    </Grid>
  );
};

export default CountryField;
