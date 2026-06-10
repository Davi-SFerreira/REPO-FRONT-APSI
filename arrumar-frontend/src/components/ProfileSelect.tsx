type Props = {
  onSelect: (type: "funcionario" | "hospede") => void
}

function ProfileSelect({ onSelect }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-8 flex flex-col items-center gap-6">
      <div className="bg-blue-600 rounded-2xl p-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
          alt="HotelSys"
          className="w-16 h-16 invert"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Bem-vindo</h1>
        <p className="text-sm text-gray-500 mt-1">Selecione seu perfil de acesso</p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <button
          onClick={() => onSelect("funcionario")}
          className="w-full py-3 rounded-xl border-2 border-orange-400 text-gray-800 font-medium hover:bg-orange-50 transition"
        >
          Funcionário
        </button>
        <button
          onClick={() => onSelect("hospede")}
          className="w-full py-3 rounded-xl border-2 border-green-400 text-gray-800 font-medium hover:bg-green-50 transition"
        >
          Hóspede
        </button>
      </div>
      <p className="text-xs text-gray-400">© 2026 HotelSys</p>
    </div>
  )
}

export default ProfileSelect