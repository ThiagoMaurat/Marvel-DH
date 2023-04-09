import { FieldController } from "dh-marvel/components/field-text/FieldController";
import React from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useFormContext } from "react-hook-form";
import { zodInfer } from "./schema";
import { Box, Button } from "@mui/material";
import FieldInputMaskController from "dh-marvel/components/field-mask/FieldMaskController";

export const ThirdStep = () => {
  const {
    control,
    trigger,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext<zodInfer>();

  const { card } = watch();

  const triggerErrors = async () => {
    const [nameValid, emailValid, lastnameValid] = await Promise.all([
      trigger("card.number"),
      trigger("card.cvc"),
      trigger("card.expDate"),
      trigger("card.nameOnCard"),
    ]);

    if (nameValid && emailValid && lastnameValid) {
      return true;
    }

    return false;
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
        placeholder="Número"
        defaultValue={""}
        label="Número"
        hookError={errors?.card?.number}
      />

      <FieldInputMaskController
        mask={"999"}
        inputProps={{ placeholder: "CVC" }}
        control={control}
        name="card.cvc"
        placeholder="CVC"
        defaultValue={""}
        label="CVC"
        hookError={errors?.card?.cvc}
      />

      <FieldInputMaskController
        mask={"99/99"}
        inputProps={{ placeholder: "Vencimento" }}
        control={control}
        placeholder="Vencimento"
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

      <Button type="submit" onClick={triggerErrors}>
        Finalizar
      </Button>
    </Box>
  );
};
