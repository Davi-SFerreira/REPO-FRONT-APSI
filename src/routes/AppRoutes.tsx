import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import { PrivateRoute } from './PrivateRoute'

// Auth
import { SelectProfile } from '../pages/auth/SelectProfile'
import { LoginFuncionario } from '../pages/auth/LoginFuncionario'
import { LoginHospede } from '../pages/auth/LoginHospede'

// Hóspede
import { DashboardHospede } from '../pages/hospede/Dashboard'
import { PedirArrumacao } from '../pages/hospede/PedirArrumacao'
import { MinhasSolicitacoes } from '../pages/hospede/MinhasSolicitacoes'

// Camareira
import { DashboardCamareira } from '../pages/camareira/Dashboard'
import { MeusQuartos } from '../pages/camareira/MeusQuartos'
import { AtualizarStatus } from '../pages/camareira/AtualizarStatus'

// Governança
import { DashboardGovernanca } from '../pages/governanca/Dashboard'
import { Camareiras } from '../pages/governanca/Camareiras'
import { DesignarQuartos } from '../pages/governanca/DesignarQuartos'
import { Historico } from '../pages/governanca/Historico'

// Recepção
import { DashboardRecepcao } from '../pages/recepcao/Dashboard'
import { StatusQuartos } from '../pages/recepcao/StatusQuartos'
import { Hospedagens } from '../pages/recepcao/Hospedagens'

// Admin
import { DashboardAdmin } from '../pages/admin/Dashboard'
import { GerenciarUsuarios } from '../pages/admin/GerenciarUsuarios'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* Rotas públicas */}
          <Route path="/" element={<SelectProfile />} />
          <Route path="/login/funcionario" element={<LoginFuncionario />} />
          <Route path="/login/hospede" element={<LoginHospede />} />

          {/* Rotas do hóspede */}
          <Route path="/hospede" element={
            <PrivateRoute perfisPermitidos={['hospede']}>
              <DashboardHospede />
            </PrivateRoute>
          } />
          <Route path="/hospede/pedir-arrumacao" element={
            <PrivateRoute perfisPermitidos={['hospede']}>
              <PedirArrumacao />
            </PrivateRoute>
          } />
          <Route path="/hospede/solicitacoes" element={
            <PrivateRoute perfisPermitidos={['hospede']}>
              <MinhasSolicitacoes />
            </PrivateRoute>
          } />

          {/* Rotas da camareira */}
          <Route path="/camareira" element={
            <PrivateRoute perfisPermitidos={['camareira']}>
              <DashboardCamareira />
            </PrivateRoute>
          } />
          <Route path="/camareira/quartos" element={
            <PrivateRoute perfisPermitidos={['camareira']}>
              <MeusQuartos />
            </PrivateRoute>
          } />
          <Route path="/camareira/status" element={
            <PrivateRoute perfisPermitidos={['camareira']}>
              <AtualizarStatus />
            </PrivateRoute>
          } />

          {/* Rotas da governança */}
          <Route path="/governanca" element={
            <PrivateRoute perfisPermitidos={['governanca']}>
              <DashboardGovernanca />
            </PrivateRoute>
          } />
          <Route path="/governanca/camareiras" element={
            <PrivateRoute perfisPermitidos={['governanca']}>
              <Camareiras />
            </PrivateRoute>
          } />
          <Route path="/governanca/designar" element={
            <PrivateRoute perfisPermitidos={['governanca']}>
              <DesignarQuartos />
            </PrivateRoute>
          } />
          <Route path="/governanca/historico" element={
            <PrivateRoute perfisPermitidos={['governanca']}>
              <Historico />
            </PrivateRoute>
          } />

          {/* Rotas da recepção */}
          <Route path="/recepcao" element={
            <PrivateRoute perfisPermitidos={['recepcao']}>
              <DashboardRecepcao />
            </PrivateRoute>
          } />
          <Route path="/recepcao/quartos" element={
            <PrivateRoute perfisPermitidos={['recepcao']}>
              <StatusQuartos />
            </PrivateRoute>
          } />
          <Route path="/recepcao/hospedagens" element={
            <PrivateRoute perfisPermitidos={['recepcao']}>
              <Hospedagens />
            </PrivateRoute>
          } />

          {/* Rotas do admin */}
          <Route path="/admin" element={
            <PrivateRoute perfisPermitidos={['admin']}>
              <DashboardAdmin />
            </PrivateRoute>
          } />
          <Route path="/admin/usuarios" element={
            <PrivateRoute perfisPermitidos={['admin']}>
              <GerenciarUsuarios />
            </PrivateRoute>
          } />

          {/* Acesso negado */}
          <Route path="/acesso-negado" element={
            <div className="flex items-center justify-center h-screen bg-green-50">
              <div className="text-center">
                <p className="text-2xl font-semibold text-slate-700">Acesso negado</p>
                <p className="text-sm text-slate-400 mt-2">
                  Você não tem permissão para acessar essa página.
                </p>
              </div>
            </div>
          } />

          {/* Página não encontrada */}
          <Route path="*" element={
            <div className="flex items-center justify-center h-screen bg-green-50">
              <div className="text-center">
                <p className="text-2xl font-semibold text-slate-700">Página não encontrada</p>
                <p className="text-sm text-slate-400 mt-2">A rota que você acessou não existe.</p>
              </div>
            </div>
          } />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}