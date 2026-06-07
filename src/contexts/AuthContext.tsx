import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Usuario, Perfil } from '../types'

// Define o que o contexto vai guardar e expor
interface AuthContextData {
  usuario: Usuario | null
  token: string | null
  perfil: Perfil | null
  loading: boolean
  login: (token: string, usuario: Usuario) => void
  logout: () => void
  estaLogado: boolean
}

// Cria o contexto vazio
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

// Provider: envolve toda a aplicação e disponibiliza os dados
export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Ao carregar o app, verifica se já tinha sessão salva
  useEffect(() => {
    const tokenSalvo = localStorage.getItem('token')
    const usuarioSalvo = localStorage.getItem('usuario')

    if (tokenSalvo && usuarioSalvo) {
      setToken(tokenSalvo)
      setUsuario(JSON.parse(usuarioSalvo))
    }

    setLoading(false)
  }, [])

  // Chamado após login bem-sucedido
  function login(novoToken: string, novoUsuario: Usuario) {
    localStorage.setItem('token', novoToken)
    localStorage.setItem('usuario', JSON.stringify(novoUsuario))
    setToken(novoToken)
    setUsuario(novoUsuario)
  }

  // Chamado ao clicar em "Sair"
  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    setToken(null)
    setUsuario(null)
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        perfil: usuario?.tipo ?? null,
        loading,
        login,
        logout,
        estaLogado: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Hook para usar o contexto facilmente em qualquer componente
export function useAuth() {
  return useContext(AuthContext)
}