// import SignOut from "@/icons/signOutIcon";
// import Link from "next/link";

export function HomeHeader(){
  return (
    <header className="header">
        <div className="header__nav">
            <h2 className="display">
                Work Service Management
            </h2>
            {/* <button className="link__btn">
                <Link href="../">
                    <SignOut/>
                </Link>
            </button> */}
        </div>
        <div className="headline__section">
            <h1 className="h1">
                Gestão de Solicitações de Operações de Negócios
            </h1>
            <h3 className="h3">
                Aqui você acompanha o andamento de todas as solicitações do setor de Operações de Negócios.
                Favor preencher todos os campos para realizar um novo cadastro.
            </h3>
        </div>
    </header>
  )
}