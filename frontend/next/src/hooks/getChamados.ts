export async function getChamados(): Promise<Chamado[]> {
    // http://10.4.12.15:8080/chamado
    const res = await fetch("http://10.4.12.15:8080/chamado", { method: "GET", cache: "no-store" });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}