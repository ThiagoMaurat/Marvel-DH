import { Box } from "@mui/material";
import { FieldController } from "dh-marvel/components/field-text/FieldController";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function FirstStep() {
  const { control } = useFormContext();

  return (
    <Box>
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
    </Box>
  );
}
