import { useState } from "react";
import './steeper.scss'

export const Steeper = ({steps: stepInitial}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState(stepInitial);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="app-stepper">
      <div className="app-stepper-header" style={{gridTemplateColumns: `repeat(${steps.length}, 1fr)`}}>
        {/* <div className="step-header complete">
          <div className="step-image">1</div>
          <div className="step-title">option 1</div>
        </div>
        <div className="step-header active">
          <div className="step-image">1</div>
          <div className="step-title">option 1</div>
        </div>
        <div className="step-header">
          <div className="step-image">1</div>
          <div className="step-title">option 1</div>
        </div> */}
        {steps.map((step, index) => {
          return (
            <div 
              className={
                `step-header
                ${index < activeStep ? 'complete' : ''}
                ${index === activeStep ? 'active' : ''} 
                `
              } 
              key={index}>
              <div className="step-image">{step.heading}</div>
              <div className="step-title">{step.title}</div>
            </div>
          )
        })}
      </div>

      <div className="app-stepper-body">
        <div className="app-stepper-body-content">
          {steps[activeStep].content}
        </div>
      </div>

      <div className="app-stepper-footer">
        <div className="app-stepper-footer-actions">
          <button
            className="app-steeper-action"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            Back
          </button>
          <button
            className="app-steeper-action"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}