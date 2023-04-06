import React, { createContext, useContext, useState } from "react";

interface StepFormContext {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
}

interface StepFormProviderProps {
  children: React.ReactNode;
}

const StepFormContext = createContext<StepFormContext>({} as StepFormContext);

export const StepFormProvider = ({ children }: StepFormProviderProps) => {
  const [currentStep, setStep] = useState(0);

  return (
    <StepFormContext.Provider
      value={{
        currentStep,
        setStep,
      }}
    >
      {children}
    </StepFormContext.Provider>
  );
};

export function useStepFormContext() {
  const context = useContext(StepFormContext);
  return context;
}
