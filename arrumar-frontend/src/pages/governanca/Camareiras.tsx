import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbUsers } from "react-icons/tb"

const camareiras = [
  { nome: "Ana Souza", turno: "Manhã", quartos: 3, concluidos: 1 },
  { nome: "Paula Lima", turno: "Tarde", quartos: 4, concluidos: 2 },
  { nome: "Carla Reis", turno: "Manhã", quartos: 2, concluidos: 2 },
]

function Camareiras() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/governanca")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbUsers size={28} className="text-orange-400" />
            <h1 className="text-xl font-bold text-gray-800">Camareiras</h1>
          </div>

          <div className="flex flex-col gap-3">
            {camareiras.map((c, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-800">{c.nome}</p>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{c.turno}</span>
                </div>
                <div className="flex gap-4 text-sm text-gray-500">
                  <p>Quartos: <span className="font-medium text-gray-700">{c.quartos}</span></p>
                  <p>Concluídos: <span className="font-medium text-green-600">{c.concluidos}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Camareiras