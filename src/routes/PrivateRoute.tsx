import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import type { Perfil } from '../types'

interface PrivateRouteProps {
  children: React.ReactNode
  perfisPermitidos?: Perfil[]  // quais perfis podem acessar essa rota
}

export function PrivateRoute({ children, perfisPermitidos }: PrivateRouteProps) {
  const { estaLogado, perfil, loading } = useAuth()

  // Aguarda verificar se há sessão salva antes de redirecionar
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-green-50">
        <span className="text-slate-400 text-sm">Carregando...</span>
      </div>
    )
  }

  // Se não estiver logado, manda para a tela inicial
  if (!estaLogado) {
    return <Navigate to="/" replace />
  }

  // Se a rota exige um perfil específico e o usuário não tem, bloqueia
  if (perfisPermitidos && perfil && !perfisPermitidos.includes(perfil)) {
    return <Navigate to="/acesso-negado" replace />
  }

  return <>{children}</>
}