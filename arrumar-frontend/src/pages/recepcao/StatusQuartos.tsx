import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbLayoutGrid } from "react-icons/tb"
import { useQuartos } from "../../contexts/QuartosContext"

const statusCor: Record<string, string> = {
  "Pendente": "bg-orange-100 text-orange-700",
  "Em andamento": "bg-blue-100 text-blue-700",
  "Concluído": "bg-green-100 text-green-700",
}

function StatusQuartos() {
  const navigate = useNavigate()
  const { quartos } = useQuartos()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/recepcao")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbLayoutGrid size={28} className="text-orange-400" />
            <h1 className="text-xl font-bold text-gray-800">Status dos Quartos</h1>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {quartos.map((q) => (
              <div key={q.numero} className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-800 text-lg">#{q.numero}</p>
                <span className={`text-xs px-2 py-1 rounded-full font-medium mt-1 inline-block ${statusCor[q.status]}`}>
                  {q.status}
                </span>
                <p className="text-xs text-gray-400 mt-2">{q.camareira}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusQuartos