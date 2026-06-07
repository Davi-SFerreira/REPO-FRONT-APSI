export type Perfil = 'hospede' | 'camareira' | 'governanca' | 'recepcao' | 'admin'

export interface Usuario {
  id: number
  nome: string
  login: string
  tipo: Perfil
  ativo: boolean
}

export interface Quarto {
  id: number
  numero: string
  andar: number
  tipo: string
  status: string
  camareira_atual_id: number | null
}

export interface Solicitacao {
  id: number
  quarto_id: number
  hospedagem_id: number
  solicitante_id: number
  origem: string
  data_solicitacao: string
  horario_preferencial: string | null
  observacao: string | null
  status: string
}

export interface Designacao {
  id: number
  solicitacao_id: number
  quarto_id: number
  camareira_id: number
  governanca_id: number
  data_designacao: string
  data_inicio: string | null
  data_conclusao: string | null
  ativa: boolean
}