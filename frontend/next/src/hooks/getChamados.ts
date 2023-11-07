export async function getChamados(): Promise<Chamado[]> {
    const res = await fetch("http://10.4.12.15:8080/chamado", { method: "GET" });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}