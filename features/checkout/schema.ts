import * as z from "zod";

const addressSchema = z.object({
  address1: z.string().nonempty("Endereço obrigatório"),
  address2: z.string().nullable(),
  city: z.string().nonempty("Cidade obrigatória"),
  state: z.string().nonempty("Estado obrigatório"),
  zipCode: z.string().nonempty("Código Postal obrigatório"),
});

const cardSchema = z.object({
  number: z.string().nonempty(),
  cvc: z.string().nonempty(),
  expDate: z.string().nonempty(),
  nameOnCard: z.string().nonempty(),
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
});

export type zodInfer = z.infer<typeof checkoutSchema>;
