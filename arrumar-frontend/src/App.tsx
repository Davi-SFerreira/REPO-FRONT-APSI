import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
import ProtectedRoute from "./routes/ProtectedRoute"

import ProfileSelect from "./components/ProfileSelect"
import LoginForm from "./components/LoginForm"

import DashboardHospede from "./pages/DashboardHospede"
import DashboardCamareira from "./pages/DashboardCamareira"
import DashboardGovernanca from "./pages/DashboardGovernanca"
import DashboardRecepcao from "./pages/DashboardRecepcao"

import PedirArrumacao from "./pages/hospede/PedirArrumacao"
import MinhasSolicitacoes from "./pages/hospede/MinhasSolicitacoes"
import MeuPerfil from "./pages/hospede/MeuPerfil"

import MeusQuartos from "./pages/camareira/MeusQuartos"
import AtualizarStatus from "./pages/camareira/AtualizarStatus"

import Camareiras from "./pages/governanca/Camareiras"
import DesignarQuartos from "./pages/governanca/DesignarQuartos"
import Historico from "./pages/governanca/Historico"

import StatusQuartos from "./pages/recepcao/StatusQuartos"
import Hospedagens from "./pages/recepcao/Hospedagens"
import Notificacoes from "./pages/recepcao/Notificacoes"

function App() {
  const { user } = useAuth()

  return (
    <Routes>
      {/* Telas públicas */}
      <Route path="/" element={<ProfileSelect />} />
      <Route path="/login/:tipo" element={<LoginForm />} />

      {/* Hóspede */}
      <Route path="/dashboard/hospede" element={<ProtectedRoute roles={["hospede"]}><DashboardHospede /></ProtectedRoute>} />
      <Route path="/hospede/pedir-arrumacao" element={<ProtectedRoute roles={["hospede"]}><PedirArrumacao /></ProtectedRoute>} />
      <Route path="/hospede/solicitacoes" element={<ProtectedRoute roles={["hospede"]}><MinhasSolicitacoes /></ProtectedRoute>} />
      <Route path="/hospede/perfil" element={<ProtectedRoute roles={["hospede"]}><MeuPerfil /></ProtectedRoute>} />

      {/* Camareira */}
      <Route path="/dashboard/camareira" element={<ProtectedRoute roles={["camareira"]}><DashboardCamareira /></ProtectedRoute>} />
      <Route path="/camareira/quartos" element={<ProtectedRoute roles={["camareira"]}><MeusQuartos /></ProtectedRoute>} />
      <Route path="/camareira/status" element={<ProtectedRoute roles={["camareira"]}><AtualizarStatus /></ProtectedRoute>} />

      {/* Governança */}
      <Route path="/dashboard/governanca" element={<ProtectedRoute roles={["governanca"]}><DashboardGovernanca /></ProtectedRoute>} />
      <Route path="/governanca/camareiras" element={<ProtectedRoute roles={["governanca"]}><Camareiras /></ProtectedRoute>} />
      <Route path="/governanca/designar" element={<ProtectedRoute roles={["governanca"]}><DesignarQuartos /></ProtectedRoute>} />
      <Route path="/governanca/historico" element={<ProtectedRoute roles={["governanca"]}><Historico /></ProtectedRoute>} />

      {/* Recepção */}
      <Route path="/dashboard/recepcao" element={<ProtectedRoute roles={["recepcao"]}><DashboardRecepcao /></ProtectedRoute>} />
      <Route path="/recepcao/quartos" element={<ProtectedRoute roles={["recepcao"]}><StatusQuartos /></ProtectedRoute>} />
      <Route path="/recepcao/hospedagens" element={<ProtectedRoute roles={["recepcao"]}><Hospedagens /></ProtectedRoute>} />
      <Route path="/recepcao/notificacoes" element={<ProtectedRoute roles={["recepcao"]}><Notificacoes /></ProtectedRoute>} />

      {/* Redireciona rotas desconhecidas */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App