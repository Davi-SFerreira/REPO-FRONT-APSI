import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { QuartosProvider } from './contexts/QuartosContext'
import { SolicitacoesProvider } from './contexts/SolicitacoesContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QuartosProvider>
          <SolicitacoesProvider>
            <App />
          </SolicitacoesProvider>
        </QuartosProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)