export async function getChamado(id: string): Promise<Chamado>{
  const res = await fetch(`http://localhost:3004/chamado/${id}`, { method: "GET" })
  if(!res.ok) throw new Error("Failed to fetch chamado")

  return res.json();
}