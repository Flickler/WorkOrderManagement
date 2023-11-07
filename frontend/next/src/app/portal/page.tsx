import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getChamados } from "@/hooks/getChamados";

export default async function Portal() {

  const chamados: Promise<Chamado[]> = getChamados();
  const data = await chamados;

  return (
    <>
      <div>
        <Header heading="Portal de Consultas" />
        <main className="main">
          <div className="cards_wrapper">
            { data.map((chamado) => (
              <Card key={chamado.id} chamado={chamado}/>
            ))}
          </div>
        </main>
      </div>
      <Footer/>
    </>
  );
}
