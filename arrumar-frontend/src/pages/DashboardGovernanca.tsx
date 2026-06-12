import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { TbUsers, TbLayoutGrid, TbHistory } from "react-icons/tb"
import { useAuth } from "../contexts/AuthContext"
import { useQuartos } from "../contexts/QuartosContext"

const totalCamareiras = 3 // Ana Souza, Paula Lima, Carla Reis

function DashboardGovernanca() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { quartos } = useQuartos()

  const pendentes = quartos.filter((q) => q.status === "Pendente").length
  const emAndamento = quartos.filter((q) => q.status === "Em andamento").length
  const concluidos = quartos.filter((q) => q.status === "Concluído").length

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-50">
      <Sidebar
        nome={user?.nome || "Governança"}
        cargo="Governança"
        cor="#2563EB"
        itens={[
          { label: "Início", destaque: true, rota: "/dashboard/governanca" },
          { label: "Camareiras", rota: "/governanca/camareiras" },
          { label: "Designar Quartos", rota: "/governanca/designar" },
          { label: "Histórico", rota: "/governanca/historico" },
        ]}
      />
      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Painel de Governança</h1>
        <p className="text-sm text-gray-500 mb-6">{totalCamareiras} camareiras · {quartos.length} quartos ativos hoje</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div
            onClick={() => navigate("/governanca/camareiras")}
            className="bg-white rounded-xl border border-gray-200 p-4 relative cursor-pointer hover:shadow-md transition"
          >
            <TbUsers size={24} className="text-orange-400 mb-2" />
            <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalCamareiras}
            </span>
            <p className="font-semibold text-gray-800 text-sm">Camareiras</p>
            <p className="text-xs text-gray-400 mt-1">Ver todas as camareiras</p>
          </div>
          <div
            onClick={() => navigate("/governanca/designar")}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition"
          >
            <TbLayoutGrid size={24} className="text-blue-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Designar Quartos</p>
            <p className="text-xs text-gray-400 mt-1">Atribuir quartos às camareiras</p>
          </div>
          <div
            onClick={() => navigate("/governanca/historico")}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition"
          >
            <TbHistory size={24} className="text-green-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Histórico</p>
            <p className="text-xs text-gray-400 mt-1">Ver registros de limpezas</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-500">{pendentes}</p>
            <p className="text-xs text-gray-400">Pendentes</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-500">{emAndamento}</p>
            <p className="text-xs text-gray-400">Em andamento</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-500">{concluidos}</p>
            <p className="text-xs text-gray-400">Concluídos</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardGovernanca