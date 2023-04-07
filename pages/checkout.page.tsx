import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useStepFormContext } from "contexts/steps";
import { QontoStepIcon } from "dh-marvel/components/steps/QontoStepIcon";
import { QontoConnector } from "dh-marvel/components/steps/Qontos";
import FirstStep from "dh-marvel/features/checkout/FirstStep";
import SecondStep from "dh-marvel/features/checkout/SecondStep";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, zodInfer } from "dh-marvel/features/checkout/schema";
import { ThirdStep } from "dh-marvel/features/checkout/ThirdStep";

export default function Checkout() {
  const steps = ["Dados Pessoais", "Endereço", "Pagamento"];

  const { currentStep } = useStepFormContext();

  const methods = useForm<zodInfer>({
    resolver: zodResolver(checkoutSchema),
    shouldUseNativeValidation: false,
    mode: "all",
  });

  console.log(methods.formState.errors);

  const submitForm = (data: zodInfer) => {
    console.log(data);
    console.log(methods.formState.errors.customer);
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

        {currentStep === 1 && <SecondStep />}

        {currentStep === 2 && <ThirdStep />}

        <Button type="submit">submit</Button>
      </form>
    </FormProvider>
  );
}
