export async function createChamado(form: {
  funcionario: string;
  titulo: string;
  descricao: string;
}): Promise<Chamado> {
  // http://10.4.12.15:8080/chamado/${id}
  const res = await fetch("http://localhost:3004/chamado", {
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify(form)
  });
  if (!res.ok) throw new Error("Failed to create data");

  return res.json();
}