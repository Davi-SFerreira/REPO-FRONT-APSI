import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbUsers } from "react-icons/tb"

const hospedagens = [
  { nome: "João Silva", quarto: "204", checkin: "08/06/2026", checkout: "12/06/2026", status: "Ativo" },
  { nome: "Maria Oliveira", quarto: "201", checkin: "09/06/2026", checkout: "11/06/2026", status: "Ativo" },
  { nome: "Pedro Santos", quarto: "103", checkin: "07/06/2026", checkout: "10/06/2026", status: "Check-out hoje" },
]

const statusCor: Record<string, string> = {
  "Ativo": "bg-green-100 text-green-700",
  "Check-out hoje": "bg-orange-100 text-orange-700",
}

function Hospedagens() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/recepcao")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbUsers size={28} className="text-blue-500" />
            <h1 className="text-xl font-bold text-gray-800">Hospedagens</h1>
          </div>

          <div className="flex flex-col gap-3">
            {hospedagens.map((h, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between mb-1">
                  <p className="font-semibold text-gray-800">{h.nome}</p>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusCor[h.status]}`}>{h.status}</span>
                </div>
                <p className="text-sm text-gray-500">Quarto {h.quarto}</p>
                <p className="text-xs text-gray-400 mt-1">Check-in: {h.checkin} · Check-out: {h.checkout}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hospedagens