import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbHistory } from "react-icons/tb"

const historico = [
  { quarto: "101", camareira: "Ana Souza", data: "10/06/2026", hora: "08:30", status: "Concluído" },
  { quarto: "102", camareira: "Paula Lima", data: "10/06/2026", hora: "09:45", status: "Concluído" },
  { quarto: "204", camareira: "Carla Reis", data: "10/06/2026", hora: "10:00", status: "Em andamento" },
]

function Historico() {
  const navigate = useNavigate()

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
            {historico.map((h, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between mb-1">
                  <p className="font-semibold text-gray-800">Quarto {h.quarto}</p>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{h.status}</span>
                </div>
                <p className="text-sm text-gray-500">{h.camareira}</p>
                <p className="text-xs text-gray-400 mt-1">{h.data} às {h.hora}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Historico