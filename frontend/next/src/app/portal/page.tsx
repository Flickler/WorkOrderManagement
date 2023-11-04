import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Portal() {
  return (
    <>
      <Header heading="Portal de Consultas" />
      <main className="main">
        <div className="cards_wrapper">
          <Card />
        </div>
      </main>
      <Footer/>
    </>
  );
}
