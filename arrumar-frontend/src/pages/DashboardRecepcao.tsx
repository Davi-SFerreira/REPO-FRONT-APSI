import Sidebar from "../components/Sidebar"
import { TbLayoutGrid, TbUsers, TbBell } from "react-icons/tb"

function DashboardRecepcao() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-green-50">
      <Sidebar
        nome="Carlos Mendes"
        cargo="Recepção"
        cor="#16A34A"
        itens={[
          { label: "Início", destaque: true },
          { label: "Status dos Quartos" },
          { label: "Hospedagens" },
          { label: "Notificações" },
        ]}
        rodape="Sair"
      />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold text-gray-800">Painel da Recepção</h1>
          <div className="relative">
            <TbBell size={22} className="text-gray-500" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">20 quartos · 3 notificações pendentes</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <TbLayoutGrid size={24} className="text-orange-400 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Status dos Quartos</p>
            <p className="text-xs text-gray-400 mt-1">Ver situação geral</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <TbUsers size={24} className="text-blue-500 mb-2" />
            <p className="font-semibold text-gray-800 text-sm">Hospedagens</p>
            <p className="text-xs text-gray-400 mt-1">Check-in e check-out</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 relative">
            <TbBell size={24} className="text-green-500 mb-2" />
            <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            <p className="font-semibold text-gray-800 text-sm">Notificações</p>
            <p className="text-xs text-gray-400 mt-1">Alertas do sistema</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-500">14</p>
            <p className="text-xs text-gray-400">Ocupados</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-500">4</p>
            <p className="text-xs text-gray-400">Livres</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-500">2</p>
            <p className="text-xs text-gray-400">Em limpeza</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardRecepcao