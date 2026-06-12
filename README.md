# HotelSys — Sistema de Limpeza de Quartos

Sistema web para gestão de limpeza e arrumação de quartos de hotel, com perfis diferentes para hóspedes e funcionários (camareira, governança e recepção).

## 🚀 Tecnologias utilizadas

- **React 19** + **Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM** — navegação entre páginas
- **Zod** — validação de formulários
- **Context API** — gerenciamento de estado global (autenticação, quartos e solicitações)
- **React Icons** — ícones da interface

## 📋 Funcionalidades

### Controle de acesso (RBAC)

O sistema possui 4 perfis de usuário, cada um com acesso apenas às suas próprias telas:

| Perfil | Acesso |
|---|---|
| **Hóspede** | Pedir arrumação, ver suas solicitações, ver perfil |
| **Camareira** | Ver quartos designados, marcar limpeza como concluída |
| **Governança** | Ver camareiras, designar quartos, ver histórico de limpezas |
| **Recepção** | Ver status dos quartos, hospedagens, notificações |

Rotas protegidas redirecionam automaticamente o usuário para o dashboard correto caso ele tente acessar uma página fora do seu perfil.

### Fluxo de dados integrado

- A **governança** designa um quarto a uma camareira → o quarto aparece na lista da **camareira**
- A **camareira** marca o quarto como limpo → o status é atualizado em tempo real para **governança** e **recepção**
- O **hóspede** envia uma solicitação de arrumação → a **recepção** recebe a notificação e pode atualizar o status
- Login persistente via `localStorage`

## 🔑 Como testar (logins)

O login simula diferentes perfis com base no e-mail digitado (qualquer senha com 6+ caracteres):

| Perfil | E-mail |
|---|---|
| Hóspede | `hospede@hotel.com` |
| Camareira | `camareira@hotel.com` |
| Governança | `governanca@hotel.com` |
| Recepção | `recepcao@hotel.com` |

## 🛠️ Como rodar o projeto

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`

## 📁 Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (Sidebar, LoginForm, ProfileSelect)
├── contexts/          # Context API (AuthContext, QuartosContext, SolicitacoesContext)
├── pages/
│   ├── camareira/     # Telas exclusivas da camareira
│   ├── governanca/     # Telas exclusivas da governança
│   ├── hospede/       # Telas exclusivas do hóspede
│   ├── recepcao/      # Telas exclusivas da recepção
│   └── Dashboard*.tsx # Dashboards de cada perfil
├── routes/            # ProtectedRoute (RBAC)
├── types/             # Tipos TypeScript e schemas de validação (Zod)
└── App.tsx            # Definição das rotas
```

## 📱 Responsividade

O sistema é totalmente responsivo, com menu lateral em telas grandes (desktop) e menu superior simplificado em telas pequenas (mobile).

## 👥 Autores

Projeto desenvolvido para a disciplina de APSI (Análise e Projeto de Sistemas).
