import { createContext, useContext, useState, useEffect } from "react"
import type { Solicitacao, StatusSolicitacao } from "../types"

interface SolicitacoesContextType {
  solicitacoes: Solicitacao[]
  criarSolicitacao: (hospede: string, quarto: string, observacao: string) => void
  atualizarStatus: (id: number, status: StatusSolicitacao) => void
}

const SolicitacoesContext = createContext<SolicitacoesContextType>({} as SolicitacoesContextType)

const STORAGE_KEY = "hotelsys_solicitacoes"

const solicitacoesIniciais: Solicitacao[] = [
  { id: 1, hospede: "João", quarto: "204", observacao: "Trocar roupa de cama", status: "Concluído", data: "10/06/2026", hora: "09:15" },
  { id: 2, hospede: "João", quarto: "204", observacao: "Toalhas extras", status: "Em andamento", data: "10/06/2026", hora: "14:30" },
]

export function SolicitacoesProvider({ children }: { children: React.ReactNode }) {
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>(solicitacoesIniciais)

  useEffect(() => {
    const salvo = localStorage.getItem(STORAGE_KEY)
    if (salvo) {
      try {
        setSolicitacoes(JSON.parse(salvo))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  function salvar(novas: Solicitacao[]) {
    setSolicitacoes(novas)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novas))
  }

  function criarSolicitacao(hospede: string, quarto: string, observacao: string) {
    const agora = new Date()
    const data = agora.toLocaleDateString("pt-BR")
    const hora = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })

    const nova: Solicitacao = {
      id: Date.now(),
      hospede,
      quarto,
      observacao,
      status: "Pendente",
      data,
      hora,
    }

    salvar([nova, ...solicitacoes])
  }

  function atualizarStatus(id: number, status: StatusSolicitacao) {
    const novas = solicitacoes.map((s) => (s.id === id ? { ...s, status } : s))
    salvar(novas)
  }

  return (
    <SolicitacoesContext.Provider value={{ solicitacoes, criarSolicitacao, atualizarStatus }}>
      {children}
    </SolicitacoesContext.Provider>
  )
}

export function useSolicitacoes() {
  return useContext(SolicitacoesContext)
}