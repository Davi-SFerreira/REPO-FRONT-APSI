import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { TbLayoutGrid, TbUsers, TbBell } from "react-icons/tb"
import { useAuth } from "../contexts/AuthContext"
import { useSolicitacoes } from "../contexts/SolicitacoesContext"
import { useQuartos } from "../contexts/QuartosContext"

function DashboardRecepcao() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { solicitacoes } = useSolicitacoes()
  const { quartos } = useQuartos()

  const pendentes = solicitacoes.filter((s) => s.status !== "Concluído").length

  const ocupados = quartos.filter((q) => q.status !== "Concluído").length
  const emLimpeza = quartos.filter((q) => q.status === "Em andamento").length
  const livres = quartos.filter((q) => q.status === "Concluído").length

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-green-50">
      <Sidebar
        nome={user?.nome || "Recepção"}
        cargo="Recepção"
        cor="#16A34A"
        itens={[
          { label: "Início", destaque: true, rota: "/dashboard/recepcao" },
          { label: "Status dos Quartos", rota: "/recepcao/quartos" },
          { label: "Hospedagens", rota: "/recepcao/hospedagens" },
          { label: "Notificações", rota: "/recepcao/notificacoes" },
        ]}
      />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-800">Painel da Recepção</h1>
          <div className="relative">
            <TbBell size={22} className="text-gray-500" />
            {pendentes > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {pendentes}
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">20 quartos · {pendentes} notificações pendentes</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div
            onClick={() => navigate("/recepcao/quartos")}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition"
          >
            <TbLayoutGrid size={24} className="text-orange-400 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Status dos Quartos</p>
            <p className="text-xs text-gray-400 mt-1">Ver situação geral</p>
          </div>
          <div
            onClick={() => navigate("/recepcao/hospedagens")}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition"
          >
            <TbUsers size={24} className="text-blue-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Hospedagens</p>
            <p className="text-xs text-gray-400 mt-1">Check-in e check-out</p>
          </div>
          <div
            onClick={() => navigate("/recepcao/notificacoes")}
            className="bg-white rounded-xl border border-gray-200 p-4 relative cursor-pointer hover:shadow-md transition"
          >
            <TbBell size={24} className="text-green-500 mb-2" />
            {pendentes > 0 && (
              <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {pendentes}
              </span>
            )}
            <p className="font-semibold text-gray-800 text-sm">Notificações</p>
            <p className="text-xs text-gray-400 mt-1">Alertas do sistema</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-500">{ocupados}</p>
            <p className="text-xs text-gray-400">Ocupados</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-500">{emLimpeza}</p>
            <p className="text-xs text-gray-400">Em limpeza</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-500">{livres}</p>
            <p className="text-xs text-gray-400">Livres</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardRecepcao