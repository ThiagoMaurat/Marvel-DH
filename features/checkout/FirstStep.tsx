import { Box, Button } from "@mui/material";
import { useStepFormContext } from "contexts/steps";
import { FieldController } from "dh-marvel/components/field-text/FieldController";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FieldErrors } from "react-hook-form";
import { zodInfer } from "./schema";

interface FirstStepProps {
  errors: FieldErrors<zodInfer>;
}

export default function FirstStep(props: FirstStepProps) {
  const { control, trigger } = useFormContext();

  const { setStep } = useStepFormContext();

  const triggerErrors = async () => {
    const [nameValid, emailValid, lastnameValid] = await Promise.all([
      trigger("customer.name", { shouldFocus: true }),
      trigger("customer.lastname", { shouldFocus: true }),
      trigger("customer.email", { shouldFocus: true }),
    ]);

    if (nameValid && emailValid && lastnameValid) {
      setStep(1);
    }
  };

  return (
    <Box
      display={"flex"}
      gap={"1rem"}
      flexDirection={"column"}
      width={"100%"}
      maxWidth={"350px"}
      margin={"0 auto"}
      paddingY={"4rem"}
      paddingX={"1.5rem"}
    >
      <FieldController
        inputProps={{ placeholder: "Name" }}
        control={control}
        name="customer.name"
        defaultValue={""}
        label="Nome"
        hookError={props?.errors?.customer?.name}
      />

      <FieldController
        inputProps={{ placeholder: "LastName" }}
        control={control}
        name="customer.lastname"
        defaultValue={""}
        label="Sobrenome"
        hookError={props?.errors?.customer?.lastname}
      />

      <FieldController
        inputProps={{ placeholder: "Email", type: "email" }}
        control={control}
        label="E-mail"
        defaultValue={""}
        name="customer.email"
        hookError={props?.errors?.customer?.email}
      />

      <Button onClick={triggerErrors}>Próximo Step</Button>
    </Box>
  );
}
