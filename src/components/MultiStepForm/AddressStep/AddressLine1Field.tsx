import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const AddressLine1Field = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label='Address Line 1'
        value={formValues.addressLine1}
        onChange={(e) =>
          setFormValues({ ...formValues, addressLine1: e.target.value })
        }
        type='text'
      />
    </Grid>
  );
};

export default AddressLine1Field;
