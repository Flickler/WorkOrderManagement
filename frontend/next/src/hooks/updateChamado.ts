export async function updateChamado(chamado: Chamado): Promise<{ url: string }> {
  const res = await fetch(`http://10.4.12.15:8080/chamado/${chamado.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(chamado),
    cache: 'no-cache'
  });

  if(!res.ok) throw new Error("Failed to update chamado");

  return res.json();
}