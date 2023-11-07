import { RegisterForm } from "@/components/createForm";
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
          <RegisterForm/>
        </div>
      </main>
    </>
  );
}
