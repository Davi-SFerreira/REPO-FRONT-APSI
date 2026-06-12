import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbBell, TbCheck } from "react-icons/tb"
import { useSolicitacoes } from "../../contexts/SolicitacoesContext"

const statusCor: Record<string, string> = {
  "Pendente": "border-l-orange-400 bg-orange-50",
  "Em andamento": "border-l-blue-400 bg-blue-50",
  "Concluído": "border-l-green-400 bg-green-50",
}

function Notificacoes() {
  const navigate = useNavigate()
  const { solicitacoes, atualizarStatus } = useSolicitacoes()

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

          {solicitacoes.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">Nenhuma solicitação no momento.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {solicitacoes.map((s) => (
                <div key={s.id} className={`border-l-4 rounded-xl p-4 ${statusCor[s.status]}`}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-800">
                      Quarto {s.quarto} — {s.observacao}
                    </p>
                    <span className="text-xs px-2 py-1 rounded-full font-medium bg-white/70">
                      {s.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">{s.hospede} · {s.data} às {s.hora}</p>

                  {s.status !== "Concluído" && (
                    <div className="flex gap-2">
                      {s.status === "Pendente" && (
                        <button
                          onClick={() => atualizarStatus(s.id, "Em andamento")}
                          className="text-xs px-3 py-1.5 rounded-lg bg-blue-500 text-white hover:opacity-90 transition"
                        >
                          Iniciar
                        </button>
                      )}
                      <button
                        onClick={() => atualizarStatus(s.id, "Concluído")}
                        className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-green-500 text-white hover:opacity-90 transition"
                      >
                        <TbCheck size={14} /> Concluir
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Notificacoes