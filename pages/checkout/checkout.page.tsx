import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useStepFormContext } from "contexts/steps";
import { QontoStepIcon } from "dh-marvel/components/steps/QontoStepIcon";
import { QontoConnector } from "dh-marvel/components/steps/Qontos";
import FirstStep from "dh-marvel/features/checkout/FirstStep";
import SecondStep from "dh-marvel/features/checkout/SecondStep";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, zodInfer } from "dh-marvel/features/checkout/schema";
import { ThirdStep } from "dh-marvel/features/checkout/ThirdStep";
import { urlInstance } from "dh-marvel/services/axios/baseURL";
import { AxiosError } from "axios";
import { ModalMUI } from "dh-marvel/components/modal";
import { useState } from "react";
import { useRouter } from "next/router";
import { useCartContext } from "contexts/cart";
import { ComicDetailSteps } from "dh-marvel/components/detailedCheckout";

export default function Checkout() {
  const steps = ["Dados Pessoais", "Endereço", "Pagamento"];

  const { currentStep, setFormData } = useStepFormContext();

  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { cart } = useCartContext();

  const methods = useForm<zodInfer>({
    resolver: zodResolver(checkoutSchema),
    shouldUseNativeValidation: false,
    mode: "all",
  });

  const { push } = useRouter();

  const submitForm = async (data: zodInfer) => {
    try {
      await urlInstance.post("/checkout", {
        ...data,
      });

      setFormData(data);
      push("/checkout/success");
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        const message = response?.data.message;
        setErrorMessage(message);
        setModalOpen(true);
      }
    }
  };

  return (
    <>
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

          <Box>
            {cart && (
              <ComicDetailSteps
                title={cart.title}
                thumbnail={cart.thumbnail}
                prices={cart.prices}
                stock={cart.stock}
                description={cart.description}
              />
            )}
          </Box>
        </form>
      </FormProvider>

      <ModalMUI
        open={modalOpen}
        onClose={() => {
          setErrorMessage("");
          setModalOpen(false);
        }}
      >
        <Box>
          <Typography>{errorMessage}</Typography>
          <Box
            style={{
              display: "flex",
              width: "100%",
              marginTop: "1rem",
              justifyContent: "center",
            }}
          >
            <Button onClick={() => setModalOpen(false)}>Fechar</Button>
          </Box>
        </Box>
      </ModalMUI>
    </>
  );
}
