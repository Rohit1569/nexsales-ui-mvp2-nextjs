"use client";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chips from "@/components/Chips";
import { Button } from "@mui/material";

function getSteps() {
  return ["Select Filter", "Upload your List", "Header Mapping", "File Status"];
}

const renderChip = (chip) => (
  <div key={chip.text} className={chip.classes} style={{ color: chip.color }}>
    {chip.imageSrc && (
      <img src={chip.imageSrc} alt={chip.text} className="chip-image" />
    )}
    <span style={{ color: "#175CD3" }}>{chip.text}</span>
  </div>
);

const chipData = [
  {
    text: "Current",
    classes:
      "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#EFF8FF] text-[#175CD3]",
    color: "#EFF8FF",
  },
  // Add more chip objects if needed
];

function getStepContent(step) {
  const stepData = [
    {
      title: "Select Filter",
      text: "Choose a filter option:",
      chipData: [
        {
          text: "Current",
          classes:
            "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#EFF8FF] text-[#175CD3]",
          color: "#EFF8FF",
        },
      ],
    },
    {
      title: "Upload your List",
      text: "Upload your list file:",
      chipData: [], // Add chip data for this step if needed
    },
    {
      title: "Header Mapping",
      text: "Map the headers in your file:",
      chipData: [], // Add chip data for this step if needed
    },
    {
      title: "File Status",
      text: "Check the status of your file:",
      chipData: [], // Add chip data for this step if needed
    },
  ];

  switch (step) {
    case 0:
    case 1:
    case 2:
    case 3:
      return (
        <div className="flex pt-[3px]  gap-2 self-stretch items-center justify-center bg-[#F7FCFD]">
          <div className="bg-[#F7FCFD] h-[48px] w-[286px] p-[12px] gap-4 flex flex-col flex-start border-r">
            <div className="flex">
              <div>
                <h2 className="text-base leading-6 font-semibold not-italic">
                  Step {step + 1}
                </h2>
                <div className="leading-5">
                  <h2 className="text-[#667085] text-sm font-normal not-italic leading-5 ">
                    {stepData[step].text}
                  </h2>
                </div>
              </div>
              <div>
                <Chips
                  chipData={stepData[step].chipData}
                  renderChip={renderChip}
                />
              </div>
            </div>
          </div>
          {/* Additional content for each step can be added here */}
        </div>
      );
    default:
      return "Unknown step";
  }
}

export function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper
        activeStep={activeStep}
        style={{
          width: "100%",
          margin: "0px",
          padding: "0px",
          justifyItems: "stretch",
        }}
      >
        {getSteps().map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper>
        <Typography>{getStepContent(activeStep)}</Typography>
        {/* You can include additional content or components here */}
        <div className="bg-[#F7FCFD]">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            color="primary"
            className="bg-blue-800 text-white"
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className="bg-blue-800"
          >
            {activeStep === getSteps().length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </Paper>
    </div>
  );
}
