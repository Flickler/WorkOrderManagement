export async function getChamado(id: string): Promise<Chamado>{
  const res = await fetch(`http://10.4.12.15:8080/chamado/${id}`, { method: "GET" })
  if(!res.ok) throw new Error("Failed to fetch chamado")

  return res.json();
}