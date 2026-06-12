export type Role = 'hospede' | 'camareira' | 'governanca' | 'recepcao'

export interface User {
  nome: string
  role: Role
  quarto?: string
  turno?: string
}

export type StatusQuarto = 'Pendente' | 'Em andamento' | 'Concluído'

export interface Quarto {
  numero: string
  camareira: string
  status: StatusQuarto
  atualizadoEm: string
}

export type StatusSolicitacao = 'Pendente' | 'Em andamento' | 'Concluído'

export interface Solicitacao {
  id: number
  hospede: string
  quarto: string
  observacao: string
  status: StatusSolicitacao
  data: string
  hora: string
}