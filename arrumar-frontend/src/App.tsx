import { useState } from "react"
import ProfileSelect from "./components/ProfileSelect"
import LoginForm from "./components/LoginForm"

type Screen = "profile" | "funcionario" | "hospede"

function App() {
  const [screen, setScreen] = useState<Screen>("profile")

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {screen === "profile" && (
        <ProfileSelect onSelect={(type) => setScreen(type)} />
      )}
      {screen === "funcionario" && (
        <LoginForm type="funcionario" onBack={() => setScreen("profile")} />
      )}
      {screen === "hospede" && (
        <LoginForm type="hospede" onBack={() => setScreen("profile")} />
      )}
    </div>
  )
}

export default App