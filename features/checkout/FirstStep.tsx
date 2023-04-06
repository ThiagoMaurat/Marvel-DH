import { Box } from "@mui/material";
import { FieldController } from "dh-marvel/components/field-text/FieldController";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function FirstStep() {
  const { control } = useFormContext();

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
      />

      <FieldController
        inputProps={{ placeholder: "LastName" }}
        control={control}
        name="customer.lastname"
      />

      <FieldController
        inputProps={{ placeholder: "Email", type: "email" }}
        control={control}
        name="customer.email"
      />
    </Box>
  );
}
