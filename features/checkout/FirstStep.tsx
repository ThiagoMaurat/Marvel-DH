import { Box, Button } from "@mui/material";
import { useStepFormContext } from "contexts/steps";
import { FieldController } from "dh-marvel/components/field-text/FieldController";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function FirstStep() {
  const { control } = useFormContext();

  const { setStep } = useStepFormContext();

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
        label="Nome"
      />

      <FieldController
        inputProps={{ placeholder: "LastName" }}
        control={control}
        name="customer.lastname"
        label="Sobrenome"
      />

      <FieldController
        inputProps={{ placeholder: "Email", type: "email" }}
        control={control}
        label="E-mail"
        name="customer.email"
      />

      <Button onClick={() => setStep(1)}>Próximo Step</Button>
    </Box>
  );
}
