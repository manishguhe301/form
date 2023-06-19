import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const StateField = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label='State'
        value={formValues.state}
        onChange={(e) =>
          setFormValues({ ...formValues, state: e.target.value })
        }
        type='text'
      />
    </Grid>
  );
};

export default StateField;
