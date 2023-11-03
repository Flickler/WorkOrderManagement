import { Footer } from "@/components/footer";
import { HomeHeader } from "@/components/home-header";
import { TabButton } from "@/components/tab-button";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="main">
        <div className="tab__btn__group">
          <TabButton
            href="portal"
            src="/plus-accent.png"
            msg="Consultar Operações"
          />
          <TabButton
            href="new"
            src="/plus-accent.png"
            msg="Nova Solicitação"
          />
        </div>
      </main>
      <Footer/>
    </>
  );
}
