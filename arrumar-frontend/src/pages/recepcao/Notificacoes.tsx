import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbBell } from "react-icons/tb"

const notificacoes = [
  { titulo: "Quarto 103 — Check-out pendente", tempo: "Há 10 minutos", tipo: "alerta" },
  { titulo: "Quarto 204 — Solicitação de arrumação", tempo: "Há 30 minutos", tipo: "info" },
  { titulo: "Quarto 201 — Limpeza concluída", tempo: "Há 1 hora", tipo: "sucesso" },
]

const tipoCor: Record<string, string> = {
  "alerta": "border-l-orange-400 bg-orange-50",
  "info": "border-l-blue-400 bg-blue-50",
  "sucesso": "border-l-green-400 bg-green-50",
}

function Notificacoes() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/recepcao")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbBell size={28} className="text-green-500" />
            <h1 className="text-xl font-bold text-gray-800">Notificações</h1>
          </div>

          <div className="flex flex-col gap-3">
            {notificacoes.map((n, i) => (
              <div key={i} className={`border-l-4 rounded-xl p-4 ${tipoCor[n.tipo]}`}>
                <p className="text-sm font-medium text-gray-800">{n.titulo}</p>
                <p className="text-xs text-gray-400 mt-1">{n.tempo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notificacoes