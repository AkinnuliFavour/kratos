import { useState } from "react";

export function useMultiStepForm(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const resetSteps = () => {
    setCurrentStep(1);
  };

  const progress = (currentStep / totalSteps) * 100;

  return {
    currentStep,
    nextStep,
    prevStep,
    goToStep,
    resetSteps,
    progress,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === totalSteps,
  };
}
