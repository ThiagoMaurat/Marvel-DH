import { Button, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { useStepFormContext } from "contexts/steps";
import { QontoStepIcon } from "dh-marvel/components/steps/QontoStepIcon";
import { QontoConnector } from "dh-marvel/components/steps/Qontos";
import FirstStep from "dh-marvel/features/checkout/FirstStep";
import SecondStep from "dh-marvel/features/checkout/SecondStep";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { FormProvider, useForm } from "react-hook-form";

export default function Checkout() {
  const steps = ["Dados Pessoais", "Endereço", "Pagamento"];

  const { currentStep, setStep } = useStepFormContext();

  const methods = useForm<CheckoutInput>();

  const submitForm = (data: CheckoutInput) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submitForm)}
        style={{
          width: "100%",
          paddingTop: "2rem",
        }}
      >
        <Stepper
          alternativeLabel
          activeStep={currentStep}
          connector={<QontoConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {currentStep === 0 && <FirstStep />}

        {currentStep === 0 && <SecondStep />}
      </form>
    </FormProvider>
  );
}
