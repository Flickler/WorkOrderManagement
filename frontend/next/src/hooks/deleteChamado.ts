export async function deleteChamado(id: number){
    const res = await fetch(`http://10.4.12.15:8080/chamado/${id}`, { method: "DELETE" })
    if(!res.ok) throw new Error("Failed to delete data");
}