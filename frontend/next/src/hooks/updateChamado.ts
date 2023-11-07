export async function updateChamado(chamado: Chamado) {
  const res = await fetch(`http://localhost:3004/chamado/${chamado.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(chamado),
  });

  if(!res.ok) throw new Error("Failed to update chamado");

  return res.json();
}
