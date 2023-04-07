import React, { forwardRef } from "react";
import InputMask, {
  Props as InputMaskProps,
  ReactInputMask,
} from "react-input-mask";

export type FieldMaskProps = InputMaskProps & {
  name: string;
};

const FieldMaskBase: React.ForwardRefRenderFunction<
  ReactInputMask,
  FieldMaskProps
> = (props: FieldMaskProps, ref): JSX.Element => {
  const { name, ...rest } = props;

  return <InputMask id={name} ref={ref} name={name} {...rest} />;
};

const FieldMask = forwardRef(FieldMaskBase);

export default FieldMask;
