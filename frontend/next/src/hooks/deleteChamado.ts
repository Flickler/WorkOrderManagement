export async function deleteChamado(id: number){
    // http://10.4.12.15:8080/chamado/${id}
    const res = await fetch(`http://localhost:3004/chamado/${id}`, { method: "DELETE" })
    if(!res.ok) throw new Error("Failed to delete data");
}