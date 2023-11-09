'use client'

import Link from "../../../node_modules/next/link"

export default async function apidog() {

    const dog = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", { method: 'GET', cache: 'no-cache' })
    const dogUrl: [{ url: string }] = await dog.json()
    console.log(dogUrl[0].url)

    return (
        <div className="dogo_container">
            <h1>Produto codigo, Atualizado com sucesso</h1>
            <Link href="/home">
                Voltar para o menu
            </Link>
            <img 
                src={dogUrl[0].url}
                alt="dogo image"
                width={500}
            />
        </div>
    )
}