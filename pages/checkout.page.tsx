import { Stack, Step, StepLabel, Stepper } from "@mui/material";
import { useStepFormContext } from "contexts/steps";
import { QontoStepIcon } from "dh-marvel/components/steps/QontoStepIcon";
import { QontoConnector } from "dh-marvel/components/steps/Qontos";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { FormProvider, useForm } from "react-hook-form";

export default function Checkout() {
  const steps = ["Dados Pessoais", "Endereço", "Pagamento"];

  const { currentStep, setStep } = useStepFormContext();

  const { handleSubmit } = useForm<CheckoutInput>();

  const submitForm = (data: CheckoutInput) => {
    console.log(data);
  };

  return (
    <FormProvider {...useForm()}>
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{ width: "100%", paddingTop: "2rem" }}
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

          {/* {currentStep === 0 && } */}
        </Stepper>
      </form>
    </FormProvider>
  );
}
