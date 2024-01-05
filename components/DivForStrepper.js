import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export function DivComponents({ activeStep }) {
  const divs = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  return <div>{divs[activeStep]}</div>;
}
