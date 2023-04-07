import * as z from "zod";

const addressSchema = z.object({
  address1: z.string().nonempty(),
  address2: z.string().nullable(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
  zipCode: z.string().nonempty(),
});

const cardSchema = z.object({
  number: z.string().nonempty(),
  cvc: z.string().nonempty(),
  expDate: z.string().nonempty(),
  nameOnCard: z.string().nonempty(),
});

const orderSchema = z.object({
  name: z.string().nonempty(),
  image: z.string().nonempty(),
  price: z.number().min(0),
});

export const checkoutSchema = z.object({
  customer: z.object({
    name: z.string().nonempty({ message: "Nome obrigatório" }),
    lastname: z.string().nonempty({ message: "Sobrenome obrigatório" }),
    email: z
      .string()
      .email({ message: "E-mail inválido" })
      .nonempty({ message: "E-mail obrigatório" }),
    address: addressSchema,
  }),
  card: cardSchema,
  order: orderSchema,
});

export type zodInfer = z.infer<typeof checkoutSchema>;
