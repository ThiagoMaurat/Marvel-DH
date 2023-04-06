import { Input, InputProps } from "@mui/material";
import React from "react";

export const FieldText = (props: InputProps): JSX.Element => {
  const { ...rest } = props;

  return (
    <Input
      sx={{
        background: "#D9D9D9",
        borderRadius: "8px",
        color: "#141414",
        fontWeight: "400",
        fontSize: "20px",
        width: "100%",
        height: "45px",
        border: "none",
        padding: "5px 8px",
      }}
      disableUnderline
      margin="none"
      {...rest}
    />
  );
};
