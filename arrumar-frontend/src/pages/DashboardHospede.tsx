import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { TbClipboardList, TbUser, TbBrandWhatsapp } from "react-icons/tb"
import { LiaBroomSolid } from "react-icons/lia"
import { useAuth } from "../contexts/AuthContext"
import { useSolicitacoes } from "../contexts/SolicitacoesContext"

function DashboardHospede() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { solicitacoes } = useSolicitacoes()

  const minhas = solicitacoes.filter((s) => s.hospede === user?.nome)
  const naoConcluidas = minhas.filter((s) => s.status !== "Concluído").length

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar
        nome={user?.nome || "Hóspede"}
        cargo="Quarto 204"
        cor="#2563EB"
        itens={[
          { label: "Início", destaque: true, rota: "/dashboard/hospede" },
          { label: "Pedir Arrumação", rota: "/hospede/pedir-arrumacao" },
          { label: "Minhas Solicitações", rota: "/hospede/solicitacoes" },
          { label: "Meu Perfil", rota: "/hospede/perfil" },
        ]}
        extraRodape="Falar com recepção"
        rotaExtraRodape="/dashboard/hospede"
      />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-800">Olá, {user?.nome}! 👋</h1>
        </div>
        <p className="text-sm text-gray-500 mb-6">Check-out em 10/06/2026 · Quarto 204</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div
            onClick={() => navigate("/hospede/pedir-arrumacao")}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition"
          >
            <LiaBroomSolid size={24} className="text-orange-400 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Pedir Arrumação</p>
            <p className="text-xs text-gray-400 mt-1">Solicitar limpeza do quarto</p>
          </div>
          <div
            onClick={() => navigate("/hospede/solicitacoes")}
            className="bg-white rounded-xl border-2 border-blue-500 p-4 relative cursor-pointer hover:shadow-md transition"
          >
            <TbClipboardList size={24} className="text-blue-500 mb-2" />
            {naoConcluidas > 0 && (
              <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {naoConcluidas}
              </span>
            )}
            <p className="font-semibold text-gray-800 text-sm">Solicitações</p>
            <p className="text-xs text-gray-400 mt-1">Ver status das arrumações</p>
          </div>
          <div
            onClick={() => navigate("/hospede/perfil")}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition"
          >
            <TbUser size={24} className="text-green-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Meu Perfil</p>
            <p className="text-xs text-gray-400 mt-1">Dados da hospedagem</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
          <div className="bg-green-500 rounded-lg p-2">
            <TbBrandWhatsapp size={20} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">Precisa de ajuda?</p>
            <p className="text-xs text-gray-500">Falar com a recepção agora pelo WhatsApp</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardHospede