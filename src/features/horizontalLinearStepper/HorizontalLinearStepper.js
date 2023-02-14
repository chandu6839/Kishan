import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [1,2,3,4,5]; 

export default function HorizontalLinearStepper() {
  return (
    <Box sx={{  marginBotton: '50px' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((item) => (
          <Step key={item.step}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}