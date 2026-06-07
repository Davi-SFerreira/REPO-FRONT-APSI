export function conectarSSE(url: string, onMensagem: (data: any) => void) {
  const token = localStorage.getItem('token')
  const eventSource = new EventSource(`${url}?token=${token}`)

  eventSource.onmessage = (event) => {
    onMensagem(JSON.parse(event.data))
  }

  eventSource.onerror = () => {
    eventSource.close()
  }

  // Retorna função para desconectar
  return () => eventSource.close()
}