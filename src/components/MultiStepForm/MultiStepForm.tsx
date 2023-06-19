import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BasicDetailsStep from './BasicDetails/BasicDetailsStep';
import AddressStep from './AddressStep/AddressStep';
import FileUploadStep from './FileUploadStep/FileUploadStep';
import MultiFileUploadStep from './MultiFileUpload/MultiFileUploadStep';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { CircularProgress } from '@mui/material';

const StyledStepper = styled(Stepper)`
  margin-top: 20px;
  @media (max-width: 600px) {
    margin-left: -12px;
    margin-bottom: 36px;
  }
`;

const ButtonsContainer = styled(Box)`
  margin-top: 20px;
  position: fixed;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    position: inherit;
    margin-bottom: 36px;
  }
`;

const WrapperBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const steps = ['Basic Details', 'Address', 'File Upload', 'Multi File Upload'];

function getStepContent(
  step: number,
  formValues: any,
  setFormValues: any,
  geoStatus: string,
  setGeoStatus: any
) {
  switch (step) {
    case 0:
      return (
        <BasicDetailsStep
          formValues={formValues}
          setFormValues={setFormValues}
          style={{ margin: 'auto' }}
        />
      );
    case 1:
      return (
        <AddressStep formValues={formValues} setFormValues={setFormValues} />
      );
    case 2:
      return (
        <FileUploadStep formValues={formValues} setFormValues={setFormValues} />
      );
    case 3:
      return (
        <MultiFileUploadStep
          formValues={formValues}
          setFormValues={setFormValues}
          geoStatus={geoStatus}
          setGeoStatus={setGeoStatus}
        />
      );
    default:
      return 'Unknown step';
  }
}

const MultiStepForm = ({ onLogout }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    file: null,
    files: null,
    latitude: null as number | null,
    longitude: null as number | null,
  });
  const [geoStatus, setGeoStatus] = useState('acquiring');
  const [submitting, setSubmitting] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const isNextDisabled = () => {
    if (activeStep === 0) {
      return (
        !formValues.name ||
        !formValues.email ||
        !formValues.phone ||
        formValues.phone.length < 13
      );
    }
    if (activeStep === 1) {
      return (
        !formValues.addressLine1 ||
        !formValues.city ||
        !formValues.state ||
        !formValues.pincode ||
        !formValues.country
      );
    }
    if (activeStep === 2) {
      return !formValues.file;
    }
    if (activeStep === 3) {
      return !formValues.files || geoStatus !== 'acquired';
    }
    return false;
  };

  const handleNext = () => {
    if (activeStep === 3) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormValues({
            ...formValues,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setGeoStatus('acquired');
        },
        (error) => {
          console.error(error);
          setGeoStatus('error');
        }
      );
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function handleSubmit() {
    setSubmitting(true);
    fetch('https://run.mocky.io/v3/687334e7-6d31-467e-b98b-f25f40fdfc78', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(formValues);
        setModalOpen(true);
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  }

  return (
    <Container>
      <WrapperBox>
        <StyledStepper
          activeStep={activeStep}
          orientation='horizontal'
          alternativeLabel
          sx={{
            '& .MuiStepIcon-root.Mui-active': { color: '#ff0000' },
            '& .MuiSvgIcon-root.Mui-completed': { color: '#00ff00' },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <Hidden xsDown>
                <StepLabel>{label}</StepLabel>
              </Hidden>
            </Step>
          ))}
        </StyledStepper>
        <Box
          sx={{
            flexGrow: isSmallScreen ? undefined : 1,
            display: 'flex',
            alignItems: isSmallScreen ? undefined : 'center',
          }}
        >
          <Box
            sx={{ mt: 2, maxWidth: isSmallScreen ? '100%' : 400, mx: 'auto' }}
          >
            {activeStep === steps.length ? (
              <>
                <div
                  style={{
                    display: submitting ? 'none' : 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    All steps completed, click on below button to submit the
                    form successfully.
                  </Typography>
                  <Button variant='contained' onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  {submitting && <CircularProgress />}
                </Box>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    padding: '16px',
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {getStepContent(
                    activeStep,
                    formValues,
                    setFormValues,
                    geoStatus,
                    setGeoStatus
                  )}
                </Box>
                {isSmallScreen ? (
                  <ButtonsContainer
                    sx={{
                      mt: 6,
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      onClick={handleNext}
                      disabled={isNextDisabled()}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </ButtonsContainer>
                ) : (
                  <Box
                    sx={{
                      mt: 2,
                      position: 'fixed',
                      bottom: 16,
                      left: 0,
                      right: 0,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      onClick={handleNext}
                      disabled={isNextDisabled()}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Box>
      </WrapperBox>
      <Dialog open={modalOpen}>
        <DialogTitle>Form Submitted</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your form has been submitted successfully. Click below button to
            submit another response.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onLogout} variant='contained'>
            Go to Login Page
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MultiStepForm;
