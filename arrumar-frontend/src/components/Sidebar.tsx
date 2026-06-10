type Props = {
  nome: string
  cargo: string
  cor: string
  itens: { label: string; destaque?: boolean }[]
  rodape?: string
}

function Sidebar({ nome, cargo, cor, itens, rodape }: Props) {
  return (
    <>
      {/* Mobile: barra top */}
      <div className="md:hidden w-full px-4 py-3 flex items-center gap-3" style={{ backgroundColor: cor }}>
        <div className="w-8 h-8 rounded bg-white/20" />
        <div>
          <p className="text-white font-bold text-sm">{nome}</p>
          <p className="text-white/70 text-xs">{cargo}</p>
        </div>
      </div>

      {/* Desktop: sidebar lateral */}
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
        {rodape && (
          <button className="text-white/60 text-sm text-left px-3 py-2 hover:bg-white/10 rounded-lg">
            {rodape}
          </button>
        )}
      </aside>
    </>
  )
}

export default Sidebar