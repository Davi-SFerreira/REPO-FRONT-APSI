import { useNavigate } from "react-router-dom"
import { TbArrowLeft, TbUser } from "react-icons/tb"
import { useAuth } from "../../contexts/AuthContext"

function MeuPerfil() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  function handleSair() {
    logout()
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate("/dashboard/hospede")} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-gray-800 transition">
          <TbArrowLeft size={20} /> Voltar
        </button>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <TbUser size={28} className="text-green-500" />
            <h1 className="text-xl font-bold text-gray-800">Meu Perfil</h1>
          </div>

          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <TbUser size={40} className="text-blue-500" />
            </div>
            <p className="font-bold text-gray-800 text-lg">{user?.nome}</p>
            <p className="text-sm text-gray-500">Hóspede</p>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Quarto</p>
              <p className="text-sm font-medium text-gray-800">204</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Check-out</p>
              <p className="text-sm font-medium text-gray-800">10/06/2026</p>
            </div>
          </div>

          <button
            onClick={handleSair}
            className="w-full py-3 rounded-xl border border-red-300 text-red-500 font-semibold hover:bg-red-50 transition"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}

export default MeuPerfil