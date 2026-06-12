import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { TbCircleCheck } from "react-icons/tb"
import { LiaBroomSolid } from "react-icons/lia"
import { useAuth } from "../contexts/AuthContext"
import { useQuartos } from "../contexts/QuartosContext"

function DashboardCamareira() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { quartos } = useQuartos()

  const meusQuartos = quartos.filter((q) => q.camareira === user?.nome)
  const pendentes = meusQuartos.filter((q) => q.status === "Pendente").length
  const emAndamento = meusQuartos.filter((q) => q.status === "Em andamento").length
  const concluidos = meusQuartos.filter((q) => q.status === "Concluído").length
  const naoConcluidos = pendentes + emAndamento

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-orange-50">
      <Sidebar
        nome={user?.nome || "Camareira"}
        cargo="Camareira"
        cor="#F97316"
        itens={[
          { label: "Início", destaque: true, rota: "/dashboard/camareira" },
          { label: "Meus Quartos", rota: "/camareira/quartos" },
          { label: "Atualizar Status", rota: "/camareira/status" },
        ]}
      />
      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Bom dia, {user?.nome}! ✏️</h1>
        <p className="text-sm text-gray-500 mb-6">Turno: Manhã · {meusQuartos.length} quartos designados hoje</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div
            onClick={() => navigate("/camareira/quartos")}
            className="bg-white rounded-xl border border-gray-200 p-4 relative cursor-pointer hover:shadow-md transition"
          >
            <LiaBroomSolid size={24} className="text-orange-400 mb-2" />
            {naoConcluidos > 0 && (
              <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {naoConcluidos}
              </span>
            )}
            <p className="font-semibold text-gray-800 text-sm">Meus Quartos</p>
            <p className="text-xs text-gray-400 mt-1">Ver quartos designados</p>
          </div>
          <div
            onClick={() => navigate("/camareira/status")}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition"
          >
            <TbCircleCheck size={24} className="text-green-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Atualizar Status</p>
            <p className="text-xs text-gray-400 mt-1">Marcar limpeza como concluída</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-500">{pendentes}</p>
            <p className="text-xs text-gray-400">Pendente</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-500">{emAndamento}</p>
            <p className="text-xs text-gray-400">Em andamento</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-500">{concluidos}</p>
            <p className="text-xs text-gray-400">Concluído</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardCamareira