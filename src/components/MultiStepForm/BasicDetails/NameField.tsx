import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import 'react-phone-number-input/style.css';

const NameField = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label='Name'
        value={formValues.name}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        type='text'
      />
    </Grid>
  );
};

export default NameField;
