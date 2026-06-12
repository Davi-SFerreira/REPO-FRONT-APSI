import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import type { Role } from "../types"

interface Props {
  children: React.ReactNode
  roles: Role[]
}

function ProtectedRoute({ children, roles }: Props) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Carregando...</p>
      </div>
    )
  }

  if (!user) return <Navigate to="/" />

  if (!roles.includes(user.role)) {
    return <Navigate to={`/dashboard/${user.role}`} />
  }

  return <>{children}</>
}

export default ProtectedRoute