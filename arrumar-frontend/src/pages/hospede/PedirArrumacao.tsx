import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TbArrowLeft } from "react-icons/tb"
import { LiaBroomSolid } from "react-icons/lia"
import { useAuth } from "../../contexts/AuthContext"
import { useSolicitacoes } from "../../contexts/SolicitacoesContext"
import { arrumacaoSchema } from "../../types/schemas"

function PedirArrumacao() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { criarSolicitacao } = useSolicitacoes()
  const [observacao, setObservacao] = useState("")
  const [erro, setErro] = useState("")
  const [enviado, setEnviado] = useState(false)

  function handleEnviar() {
    const resultado = arrumacaoSchema.safeParse({ observacao })

    if (!resultado.success) {
      setErro(resultado.error.issues[0].message)
      return
    }

    setErro("")
    criarSolicitacao(user?.nome || "Hóspede", user?.quarto || "204", observacao)
    setEnviado(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/hospede")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <LiaBroomSolid size={28} className="text-orange-400" />
            <h1 className="text-xl font-bold text-gray-800">Pedir Arrumação</h1>
          </div>

          {enviado ? (
            <div className="text-center py-8">
              <p className="text-4xl mb-3">✅</p>
              <p className="font-semibold text-gray-800">Solicitação enviada!</p>
              <p className="text-sm text-gray-500 mt-1">Sua solicitação foi registrada com sucesso.</p>
              <button
                onClick={() => navigate("/hospede/solicitacoes")}
                className="mt-6 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:opacity-90 transition"
              >
                Ver minhas solicitações
              </button>
            </div>
          ) : (
            <>
              <div className="bg-blue-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-blue-700 font-medium">Quarto {user?.quarto || "204"}</p>
                <p className="text-xs text-blue-500 mt-1">Sua solicitação será atendida em breve</p>
              </div>

              <div className="flex flex-col gap-2 mb-1">
                <label className="text-sm text-gray-600 font-medium">Observações</label>
                <textarea
                  rows={4}
                  placeholder="Ex: Preciso de toalhas extras, trocar roupa de cama..."
                  value={observacao}
                  onChange={(e) => setObservacao(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none transition resize-none text-black"
                  style={{ borderColor: erro ? "#EF4444" : "#D1D5DB" }}
                />
                {erro && <span className="text-xs text-red-500">{erro}</span>}
              </div>

              <button
                onClick={handleEnviar}
                className="w-full mt-4 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:opacity-90 transition"
              >
                Enviar Solicitação
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PedirArrumacao