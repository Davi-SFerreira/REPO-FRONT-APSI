import Sidebar from "../components/Sidebar"
import { TbUsers, TbLayoutGrid, TbHistory } from "react-icons/tb"

function DashboardGovernanca() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-50">
      <Sidebar
        nome="Maria Lima"
        cargo="Governança"
        cor="#2563EB"
        itens={[
          { label: "Início", destaque: true },
          { label: "Camareiras" },
          { label: "Designar Quartos" },
          { label: "Histórico" },
        ]}
        rodape="Sair"
      />
      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Painel de Governança</h1>
        <p className="text-sm text-gray-500 mb-6">5 camareiras · 12 quartos ativos hoje</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 relative">
            <TbUsers size={24} className="text-orange-400 mb-2" />
            <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
            <p className="font-semibold text-gray-800 text-sm">Camareiras</p>
            <p className="text-xs text-gray-400 mt-1">Ver todas as camareiras</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <TbLayoutGrid size={24} className="text-blue-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Designar Quartos</p>
            <p className="text-xs text-gray-400 mt-1">Atribuir quartos às camareiras</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <TbHistory size={24} className="text-green-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Histórico</p>
            <p className="text-xs text-gray-400 mt-1">Ver registros de limpezas</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-500">4</p>
            <p className="text-xs text-gray-400">Pendentes</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-500">5</p>
            <p className="text-xs text-gray-400">Em andamento</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-500">3</p>
            <p className="text-xs text-gray-400">Concluídos</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardGovernanca