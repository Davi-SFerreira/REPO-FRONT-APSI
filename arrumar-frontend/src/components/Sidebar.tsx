import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

type Item = {
  label: string
  destaque?: boolean
  rota?: string
}

type Props = {
  nome: string
  cargo: string
  cor: string
  itens: Item[]
  extraRodape?: string
  rotaExtraRodape?: string
}

function Sidebar({ nome, cargo, cor, itens, extraRodape, rotaExtraRodape }: Props) {
  const navigate = useNavigate()
  const { logout } = useAuth()

  function handleSair() {
    logout()
    navigate("/")
  }

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden w-full px-4 py-3 flex items-center gap-3" style={{ backgroundColor: cor }}>
        <div className="w-8 h-8 rounded bg-white/20" />
        <div>
          <p className="text-white font-bold text-sm">{nome}</p>
          <p className="text-white/70 text-xs">{cargo}</p>
        </div>
      </div>

      {/* Desktop */}
      <aside className="hidden md:flex flex-col w-56 min-h-screen p-4 gap-6" style={{ backgroundColor: cor }}>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-8 h-8 rounded bg-white/20" />
          <div>
            <p className="text-white font-bold text-sm">{nome}</p>
            <p className="text-white/70 text-xs">{cargo}</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {itens.map((item) => (
            <button
              key={item.label}
              onClick={() => item.rota && navigate(item.rota)}
              className={`text-left px-3 py-2 rounded-lg text-sm transition ${
                item.destaque
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-1">
          {extraRodape && (
            <button
              onClick={() => rotaExtraRodape && navigate(rotaExtraRodape)}
              className="text-white/60 text-sm text-left px-3 py-2 hover:bg-white/10 rounded-lg"
            >
              {extraRodape}
            </button>
          )}
          <button
            onClick={handleSair}
            className="text-white/60 text-sm text-left px-3 py-2 hover:bg-white/10 rounded-lg"
          >
            Sair
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar