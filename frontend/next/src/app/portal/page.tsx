import { Card } from "@/components/card";
import { Header } from "@/components/header";
import { getChamados } from "@/hooks/getChamados";
import ChevronLeftIcon from "@/icons/chevronLeftIcon";
import ChevronRightIcon from "@/icons/chevronRightIcon";
import { useEffect } from "react";

export default async function Portal() {

  const chamados = getChamados();
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
      <div className="pagination">
        <button className="btn__link">
          <ChevronLeftIcon size={14} fill="var(--gray-300)"/>
          Voltar
        </button>
        <div className="pages__count">
          <span className="pages-count">
            1
          </span>
          /
          <span className="pages-count">
            4
          </span>
        </div>
        <button className="btn__link">
          Próximo
          <ChevronRightIcon size={14} fill="var(--gray-300)"/>
        </button>
      </div>
    </>
  );
}
