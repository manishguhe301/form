import React from 'react';
import Grid from '@mui/material/Grid';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import styled from 'styled-components';

const StyledPhoneInput = styled(PhoneInput)`
  .PhoneInputInput {
    height: 56px;
    padding: 18.5px 14px;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    outline: none;
    &:focus {
      border: 2px solid #4d64e7;
    }
  }
`;

const PhoneField = ({ formValues, setFormValues }) => {
  return (
    <Grid item xs={12}>
      <StyledPhoneInput
        defaultCountry='IN'
        value={formValues.phone}
        onChange={(value) => setFormValues({ ...formValues, phone: value })}
        placeholder='Phone number'
      />
    </Grid>
  );
};

export default PhoneField;
