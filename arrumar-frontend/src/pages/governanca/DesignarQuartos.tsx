import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbLayoutGrid } from "react-icons/tb"

const camareiras = ["Ana Souza", "Paula Lima", "Carla Reis"]
const quartos = ["101", "102", "103", "201", "202", "204"]

function DesignarQuartos() {
  const navigate = useNavigate()
  const [quarto, setQuarto] = useState("")
  const [camareira, setCamareira] = useState("")
  const [designados, setDesignados] = useState<{ quarto: string; camareira: string }[]>([])

  function handleDesignar() {
    if (!quarto || !camareira) return
    setDesignados([...designados, { quarto, camareira }])
    setQuarto("")
    setCamareira("")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/governanca")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbLayoutGrid size={28} className="text-blue-500" />
            <h1 className="text-xl font-bold text-gray-800">Designar Quartos</h1>
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Quarto</label>
              <select
                value={quarto}
                onChange={(e) => setQuarto(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
              >
                <option value="">Selecione o quarto</option>
                {quartos.map(q => <option key={q} value={q}>{q}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Camareira</label>
              <select
                value={camareira}
                onChange={(e) => setCamareira(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
              >
                <option value="">Selecione a camareira</option>
                {camareiras.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <button
              onClick={handleDesignar}
              disabled={!quarto || !camareira}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-40"
            >
              Designar
            </button>
          </div>

          {designados.length > 0 && (
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-sm font-medium text-gray-600">Designados nesta sessão:</p>
              {designados.map((d, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-3 flex justify-between text-sm">
                  <span className="text-gray-700">Quarto {d.quarto}</span>
                  <span className="text-blue-600 font-medium">{d.camareira}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DesignarQuartos