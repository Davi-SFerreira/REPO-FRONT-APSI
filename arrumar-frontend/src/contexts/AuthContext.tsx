import { createContext, useContext, useState, useEffect } from "react"
import type { User, Role } from "../types"
import { userSchema } from "../types/schemas"

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (role: Role, nome: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const STORAGE_KEY = "hotelsys_user"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const salvo = localStorage.getItem(STORAGE_KEY)

    if (salvo) {
      try {
        const dados = JSON.parse(salvo)
        const resultado = userSchema.safeParse(dados)

        if (resultado.success) {
          setUser(resultado.data)
        } else {
          localStorage.removeItem(STORAGE_KEY)
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }

    setLoading(false)
  }, [])

  function login(role: Role, nome: string) {
    const novoUsuario = { nome, role }
    setUser(novoUsuario)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novoUsuario))
  }

  function logout() {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}