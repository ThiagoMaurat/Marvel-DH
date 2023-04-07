import { FieldController } from "dh-marvel/components/field-text/FieldController";
import React, { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { FieldErrors, useFormContext } from "react-hook-form";
import { zodInfer } from "./schema";
import { useStepFormContext } from "contexts/steps";
import { Box, Button } from "@mui/material";
import FieldInputMaskController from "dh-marvel/components/field-mask/FieldMaskController";

export const ThirdStep = () => {
  const {
    control,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext<zodInfer>();

  const { setStep } = useStepFormContext();

  const { card } = watch();

  const triggerErrors = async () => {
    const [nameValid, emailValid, lastnameValid] = await Promise.all([
      trigger("card.number", { shouldFocus: true }),
      trigger("card.cvc", { shouldFocus: true }),
      trigger("card.expDate", { shouldFocus: true }),
      trigger("card.nameOnCard", { shouldFocus: true }),
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
      <Cards
        number={card?.number ?? ""}
        expiry={card?.expDate ?? ""}
        cvc={card?.cvc ?? ""}
        name={card?.nameOnCard ?? ""}
      />

      <FieldInputMaskController
        mask={"9999 9999 9999 9999"}
        inputProps={{ placeholder: "Número" }}
        control={control}
        name="card.number"
        defaultValue={""}
        label="Número"
        hookError={errors?.card?.number}
      />

      <FieldInputMaskController
        mask={"999"}
        inputProps={{ placeholder: "CVC" }}
        control={control}
        name="card.cvc"
        defaultValue={""}
        label="CVC"
        hookError={errors?.card?.cvc}
      />

      <FieldInputMaskController
        mask={"99/99"}
        inputProps={{ placeholder: "Vencimento" }}
        control={control}
        name="card.expDate"
        defaultValue={""}
        label="Vencimento"
        hookError={errors?.card?.expDate}
      />

      <FieldController
        inputProps={{ placeholder: "Nome" }}
        control={control}
        name="card.nameOnCard"
        defaultValue={""}
        label="Nome"
        hookError={errors?.card?.nameOnCard}
      />

      <Button type="submit">Finalizar</Button>
    </Box>
  );
};
