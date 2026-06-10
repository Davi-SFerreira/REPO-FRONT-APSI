import { useState } from "react"

type Props = {
  type: "funcionario" | "hospede"
  onBack: () => void
}

function LoginForm({ type, onBack }: Props) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const isFuncionario = type === "funcionario"
  const titulo = isFuncionario ? "Acesso Funcionário" : "Acesso Hóspede"
  const subtitulo = isFuncionario
    ? "Entre com seu e-mail corporativo"
    : "Entre com seu e-mail do cadastro"
  const iconUrl = isFuncionario
    ? "https://cdn-icons-png.flaticon.com/512/1087/1087840.png"
    : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

  return (
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-8 flex flex-col items-center gap-5">
      <div
        className="rounded-full p-4"
        style={{ backgroundColor: isFuncionario ? "#FFF3E0" : "#E8F5E9" }}
      >
        <img src={iconUrl} alt={titulo} className="w-14 h-14" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{titulo}</h2>
        <p className="text-sm text-gray-500 mt-1">{subtitulo}</p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 rounded-lg px-3 py-2 text-sm outline-none transition"
            style={{ borderColor: isFuncionario ? "#FB923C" : "#4ADE80" }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none transition"
          />
          <span
            className="text-xs text-right cursor-pointer"
            style={{ color: isFuncionario ? "#F97316" : "#16A34A" }}
          >
            Esqueci minha senha
          </span>
        </div>
      </div>
      <button
        className="w-full py-3 rounded-xl text-white font-semibold transition hover:opacity-90"
        style={{ backgroundColor: isFuncionario ? "#F97316" : "#16A34A" }}
      >
        Entrar
      </button>
      <button
        onClick={onBack}
        className="w-full py-2 rounded-xl border border-gray-300 text-gray-500 text-sm hover:bg-gray-50 transition"
      >
        Voltar para seleção de perfil
      </button>
      <p className="text-xs text-gray-400">© 2026 HotelSys</p>
    </div>
  )
}

export default LoginForm