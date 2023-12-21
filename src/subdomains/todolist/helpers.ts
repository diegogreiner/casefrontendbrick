export const formatDate = (seconds: number) => {
  const date = new Date(seconds)
  return date.toLocaleDateString('pt-BR')
}
