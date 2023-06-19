import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import 'react-phone-number-input/style.css';

const EmailField = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label='Email'
        value={formValues.email}
        onChange={(e) =>
          setFormValues({ ...formValues, email: e.target.value })
        }
        type='email'
      />
    </Grid>
  );
};

export default EmailField;
