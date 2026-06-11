import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbClipboardList } from "react-icons/tb"

const solicitacoes = [
  { id: 1, data: "10/06/2026", hora: "09:15", status: "Concluído", obs: "Trocar roupa de cama" },
  { id: 2, data: "10/06/2026", hora: "14:30", status: "Em andamento", obs: "Toalhas extras" },
  { id: 3, data: "11/06/2026", hora: "08:00", status: "Pendente", obs: "Limpeza geral" },
]

const statusCor: Record<string, string> = {
  "Concluído": "bg-green-100 text-green-700",
  "Em andamento": "bg-blue-100 text-blue-700",
  "Pendente": "bg-orange-100 text-orange-700",
}

function MinhasSolicitacoes() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/hospede")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbClipboardList size={28} className="text-blue-500" />
            <h1 className="text-xl font-bold text-gray-800">Minhas Solicitações</h1>
          </div>

          <div className="flex flex-col gap-3">
            {solicitacoes.map((s) => (
              <div key={s.id} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-400">{s.data} às {s.hora}</p>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusCor[s.status]}`}>
                    {s.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{s.obs}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinhasSolicitacoes