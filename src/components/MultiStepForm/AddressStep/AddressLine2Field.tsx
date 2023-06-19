import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const AddressLine2Field = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label='Address Line 2'
        value={formValues.addressLine2}
        onChange={(e) =>
          setFormValues({ ...formValues, addressLine2: e.target.value })
        }
        type='text'
      />
    </Grid>
  );
};

export default AddressLine2Field;
