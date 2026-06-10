import Sidebar from "../components/Sidebar"
import { TbCircleCheck } from "react-icons/tb"
import { LiaBroomSolid } from "react-icons/lia";

function DashboardCamareira() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-orange-50">
      <Sidebar
        nome="Ana Souza"
        cargo="Camareira"
        cor="#F97316"
        itens={[
          { label: "Início", destaque: true },
          { label: "Meus Quartos" },
          { label: "Atualizar Status" },
        ]}
        rodape="Sair"
      />
      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Bom dia, Ana! ✏️</h1>
        <p className="text-sm text-gray-500 mb-6">Turno: Manhã · 3 quartos designados hoje</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 relative">
            <LiaBroomSolid size={24} className="text-orange-400 mb-2" />
            <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            <p className="font-semibold text-gray-800 text-sm">Meus Quartos</p>
            <p className="text-xs text-gray-400 mt-1">Ver quartos designados</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <TbCircleCheck size={24} className="text-green-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Atualizar Status</p>
            <p className="text-xs text-gray-400 mt-1">Marcar limpeza como concluída</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-500">1</p>
            <p className="text-xs text-gray-400">Pendente</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-500">1</p>
            <p className="text-xs text-gray-400">Em andamento</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-500">1</p>
            <p className="text-xs text-gray-400">Concluído</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardCamareira