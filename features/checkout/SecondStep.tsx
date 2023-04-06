import { Box, Button } from "@mui/material";
import { useStepFormContext } from "contexts/steps";
import { FieldController } from "dh-marvel/components/field-text/FieldController";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function SecondStep() {
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
        inputProps={{ placeholder: "Endereço" }}
        control={control}
        name="customer.address.address1"
        label="Endereço"
      />

      <FieldController
        inputProps={{ placeholder: "Endereço 2" }}
        control={control}
        name="customer.address.address2"
        label="Endereço 2"
      />

      <FieldController
        inputProps={{ placeholder: "Cidade" }}
        control={control}
        name="customer.address.city"
        label="Cidade"
      />

      <FieldController
        inputProps={{ placeholder: "Estado" }}
        control={control}
        name="customer.address.state"
        label="Estado"
      />

      <FieldController
        inputProps={{ placeholder: "Código Postal" }}
        control={control}
        name="customer.address.zipCode"
        label="Código Postal"
      />

      <Button onClick={() => setStep(2)}>Próximo Step</Button>
    </Box>
  );
}
