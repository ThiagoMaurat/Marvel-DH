import { Box, Button } from "@mui/material";
import { useStepFormContext } from "contexts/steps";
import { FieldController } from "dh-marvel/components/field-text/FieldController";
import React from "react";
import { FieldErrors, useFormContext } from "react-hook-form";
import { zodInfer } from "./schema";

interface SecondStepProps {
  errors: FieldErrors<zodInfer>;
}

export default function SecondStep(props: SecondStepProps) {
  const { control, trigger } = useFormContext();

  const { setStep } = useStepFormContext();

  const triggerErrors = async () => {
    const [nameValid, emailValid, lastnameValid] = await Promise.all([
      trigger("customer.address.address1", { shouldFocus: true }),
      trigger("customer.address.address2", { shouldFocus: true }),
      trigger("customer.address.city", { shouldFocus: true }),
      trigger("customer.address.state", { shouldFocus: true }),
      trigger("customer.address.zipCode", { shouldFocus: true }),
    ]);

    if (nameValid && emailValid && lastnameValid) {
      setStep(3);
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
        inputProps={{ placeholder: "Endereço" }}
        control={control}
        defaultValue={""}
        name="customer.address.address1"
        label="Endereço"
        hookError={props.errors?.customer?.address?.address1}
      />

      <FieldController
        inputProps={{ placeholder: "Endereço 2" }}
        control={control}
        defaultValue={""}
        name="customer.address.address2"
        label="Endereço 2"
        hookError={props.errors?.customer?.address?.address2}
      />

      <FieldController
        inputProps={{ placeholder: "Cidade" }}
        control={control}
        defaultValue={""}
        name="customer.address.city"
        label="Cidade"
        hookError={props.errors?.customer?.address?.city}
      />

      <FieldController
        inputProps={{ placeholder: "Estado" }}
        control={control}
        defaultValue={""}
        name="customer.address.state"
        label="Estado"
        hookError={props.errors?.customer?.address?.state}
      />

      <FieldController
        inputProps={{ placeholder: "Código Postal" }}
        control={control}
        defaultValue={""}
        name="customer.address.zipCode"
        label="Código Postal"
        hookError={props.errors?.customer?.address?.zipCode}
      />

      <Button onClick={triggerErrors}>Próximo Step</Button>
    </Box>
  );
}
