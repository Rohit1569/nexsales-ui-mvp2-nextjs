"use client";
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const steps = [
  { label: "Step 1", component: <Step1 /> },
  { label: "Step 2", component: <Step2 /> },
  { label: "Step 3", component: <Step3 /> },
  { label: "Step 4", component: <Step4 /> },
];

export function YourStepperComponent() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper>
        <div
          className="bg-[#F7FCFD]  mt-3 pb-6 justify-between gap-[40px]"
          style={{
            backgroundImage: 'url("/background.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
            color="primary"
            className="text-white"
          >
            {activeStep === 0 ? "Start" : "Back"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className="text-white"
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
        <Typography>
          {steps[activeStep] && steps[activeStep].component}
        </Typography>
      </Paper>
    </div>
  );
}
