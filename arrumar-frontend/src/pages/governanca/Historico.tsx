import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbHistory } from "react-icons/tb"
import { useQuartos } from "../../contexts/QuartosContext"

const statusCor: Record<string, string> = {
  "Pendente": "bg-orange-100 text-orange-700",
  "Em andamento": "bg-blue-100 text-blue-700",
  "Concluído": "bg-green-100 text-green-700",
}

function Historico() {
  const navigate = useNavigate()
  const { quartos } = useQuartos()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/governanca")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbHistory size={28} className="text-green-500" />
            <h1 className="text-xl font-bold text-gray-800">Histórico de Limpezas</h1>
          </div>

          <div className="flex flex-col gap-3">
            {quartos.map((q) => (
              <div key={q.numero} className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between mb-1">
                  <p className="font-semibold text-gray-800">Quarto {q.numero}</p>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusCor[q.status]}`}>{q.status}</span>
                </div>
                <p className="text-sm text-gray-500">{q.camareira}</p>
                <p className="text-xs text-gray-400 mt-1">Atualizado: {q.atualizadoEm}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Historico