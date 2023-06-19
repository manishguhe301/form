import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

interface LoginPageProps {
  onLogin: () => void;
}

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

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ForgotPasswordLink = styled(Typography)`
  cursor: pointer;
  margin-top: 16px;
`;

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 90%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
`;

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Enter Valid Login Credentials');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!email.includes('@') || password === '') {
      setMessage('Invalid email or password');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        'https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(
          `API request failed with status code ${response.status}`
        );
      }
      const data = await response.json();
      if (data.authToken) {
        setMessage('Login successful');
        document.title = 'Submit Form';
        onLogin();
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Typography variant='h4' gutterBottom sx={{ mb: 4 }}>
          Login
        </Typography>
        <TextField
          label='Email'
          type='email'
          value={email}
          onChange={handleEmailChange}
          sx={{ marginBottom: '16px' }}
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          sx={{ marginBottom: '16px' }}
        />
        <Button type='submit' variant='contained' disabled={loading}>
          Submit
        </Button>
        <Typography variant='caption' sx={{ mt: 2 }} color='red'>
          {message}
        </Typography>
        <ForgotPasswordLink
          variant='body2'
          color='primary'
          onClick={handleForgotPasswordClick}
        >
          Forgot Password?
        </ForgotPasswordLink>
      </Form>
      <Modal open={loading}>
        <ModalContainer>
          <CircularProgress />
          <p>Logging in</p>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default LoginPage;
