import { Header } from "@/components/header";
import CheckListIcon from "@/icons/checkListIcon";

export default function New() {
  return (
    <>
      <Header heading="Nova Solicitação" />
      <main className="main">
        <div className="modal">
          <div className="modal__header">
            <span className="tab__icon">
              <CheckListIcon fill="var(--accent)" />
            </span>
            <h3 className="h3">Cadastrar ordem de serviços</h3>
          </div>
          <form className="forms">
            <div className="fieldset">
              <label htmlFor="" className="label">
                Nome do solicitante
              </label>
              <input
                type="text"
                className="inputfield"
                placeholder="Nome e sobrenome"
              />
            </div>
            <div className="fieldset">
              <label htmlFor="" className="label">
                Título do solicitação
              </label>
              <input
                type="text"
                className="inputfield"
                placeholder="Título da OS"
              />
            </div>
            <div className="fieldset">
              <label htmlFor="" className="label">
                Descrição
              </label>
              <textarea
                name=""
                className="inputfield"
                placeholder="Detalhamento"
              ></textarea>
            </div>
          </form>
          <button className="primary__btn" type="submit">
            Cadastrar
          </button>
        </div>
      </main>
    </>
  );
}
