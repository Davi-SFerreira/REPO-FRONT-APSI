import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export type LoginData = z.infer<typeof loginSchema>

export const userSchema = z.object({
  nome: z.string().min(1),
  role: z.enum(["hospede", "camareira", "governanca", "recepcao"]),
})

export type UserData = z.infer<typeof userSchema>

export const arrumacaoSchema = z.object({
  observacao: z.string().min(5, "Descreva com mais detalhes (mínimo 5 caracteres)"),
})

export type ArrumacaoData = z.infer<typeof arrumacaoSchema>

export const designarSchema = z.object({
  quarto: z.string().min(1, "Selecione um quarto"),
  camareira: z.string().min(1, "Selecione uma camareira"),
})

export type DesignarData = z.infer<typeof designarSchema>