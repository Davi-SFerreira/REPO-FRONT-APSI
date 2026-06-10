import { useState } from "react"
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProfileSelect from "./components/ProfileSelect"
import LoginForm from "./components/LoginForm"
import DashboardHospede from "./pages/DashboardHospede"
import DashboardCamareira from "./pages/DashboardCamareira"
import DashboardGovernanca from "./pages/DashboardGovernanca"
import DashboardRecepcao from "./pages/DashboardRecepcao"

type Screen = "profile" | "funcionario" | "hospede" | "dashboard-hospede" | "dashboard-camareira" | "dashboard-governanca" | "dashboard-recepcao"

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