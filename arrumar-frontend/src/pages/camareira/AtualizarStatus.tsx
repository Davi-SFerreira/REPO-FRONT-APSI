import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbCircleCheck } from "react-icons/tb"

const historico = [
  { quarto: "101", hora: "08:30", status: "Concluído" },
  { quarto: "102", hora: "09:45", status: "Em andamento" },
  { quarto: "204", hora: "10:00", status: "Pendente" },
]

const statusCor: Record<string, string> = {
  "Concluído": "bg-green-100 text-green-700",
  "Em andamento": "bg-blue-100 text-blue-700",
  "Pendente": "bg-orange-100 text-orange-700",
}

function AtualizarStatus() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/camareira")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbCircleCheck size={28} className="text-green-500" />
            <h1 className="text-xl font-bold text-gray-800">Status das Limpezas</h1>
          </div>

          <div className="flex flex-col gap-3">
            {historico.map((h, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">Quarto {h.quarto}</p>
                  <p className="text-xs text-gray-400 mt-1">Atualizado às {h.hora}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusCor[h.status]}`}>
                  {h.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AtualizarStatus