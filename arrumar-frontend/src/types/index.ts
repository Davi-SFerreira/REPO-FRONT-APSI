export type Role = 'hospede' | 'camareira' | 'governanca' | 'recepcao'

export interface User {
  nome: string
  role: Role
  quarto?: string
  turno?: string
}