import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #baf2bb;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 24px;
`;

const Message = styled(Typography)`
  color: #f44336;
  text-align: center;
  line-height: 1.5;
`;

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setMessage('Invalid email');
      return;
    }
    setMessage(
      'A reset password email has been sent to your email address. You will be redirected to the login page in 5 seconds.'
    );
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Forgot Password</Title>
        <TextField
          label='Email'
          type='email'
          value={email}
          onChange={handleEmailChange}
          sx={{ marginBottom: '16px' }}
        />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
        <Message variant='caption' sx={{ marginTop: '12px' }}>
          {message}
        </Message>
      </Form>
    </Container>
  );
};

export default ForgotPasswordPage;
