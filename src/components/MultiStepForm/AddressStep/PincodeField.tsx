import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const PincodeField = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label='Pin-code'
        type='number'
        value={formValues.pincode}
        onChange={(e) =>
          setFormValues({ ...formValues, pincode: e.target.value })
        }
      />
    </Grid>
  );
};
export default PincodeField;
