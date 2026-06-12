import { createContext, useContext, useState, useEffect } from "react"
import type { Quarto, StatusQuarto } from "../types"

interface QuartosContextType {
  quartos: Quarto[]
  atualizarStatus: (numero: string, status: StatusQuarto) => void
  designarQuarto: (numero: string, camareira: string) => void
}

const QuartosContext = createContext<QuartosContextType>({} as QuartosContextType)

const STORAGE_KEY = "hotelsys_quartos"

const quartosIniciais: Quarto[] = [
  { numero: "101", camareira: "Ana Souza", status: "Pendente", atualizadoEm: "-" },
  { numero: "102", camareira: "Ana Souza", status: "Em andamento", atualizadoEm: "09:45" },
  { numero: "204", camareira: "Ana Souza", status: "Concluído", atualizadoEm: "08:30" },
]

export function QuartosProvider({ children }: { children: React.ReactNode }) {
  const [quartos, setQuartos] = useState<Quarto[]>(quartosIniciais)

  useEffect(() => {
    const salvo = localStorage.getItem(STORAGE_KEY)
    if (salvo) {
      try {
        setQuartos(JSON.parse(salvo))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  function salvar(novosQuartos: Quarto[]) {
    setQuartos(novosQuartos)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novosQuartos))
  }

  function atualizarStatus(numero: string, status: StatusQuarto) {
    const agora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })

    const novosQuartos = quartos.map((q) =>
      q.numero === numero ? { ...q, status, atualizadoEm: agora } : q
    )

    salvar(novosQuartos)
  }

  function designarQuarto(numero: string, camareira: string) {
    const agora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    const existe = quartos.find((q) => q.numero === numero)

    let novosQuartos: Quarto[]

    if (existe) {
      // já existe: atualiza a camareira responsável e reseta status
      novosQuartos = quartos.map((q) =>
        q.numero === numero ? { ...q, camareira, status: "Pendente", atualizadoEm: agora } : q
      )
    } else {
      // novo quarto designado
      novosQuartos = [...quartos, { numero, camareira, status: "Pendente", atualizadoEm: agora }]
    }

    salvar(novosQuartos)
  }

  return (
    <QuartosContext.Provider value={{ quartos, atualizarStatus, designarQuarto }}>
      {children}
    </QuartosContext.Provider>
  )
}

export function useQuartos() {
  return useContext(QuartosContext)
}