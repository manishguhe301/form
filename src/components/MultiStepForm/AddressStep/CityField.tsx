import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const CityField = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label='City'
        value={formValues.city}
        onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
        type='text'
      />
    </Grid>
  );
};

export default CityField;
