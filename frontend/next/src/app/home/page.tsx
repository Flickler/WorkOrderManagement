import { Footer } from "@/components/footer";
import { HomeHeader } from "@/components/home-header";
import { TabButton } from "@/components/tab-button";
import CheckListIcon from "@/icons/checkListIcon";
import PlusIcon from "@/icons/plusIcon";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="main">
        <div className="tab__btn__group">
          <TabButton href="portal">
            <CheckListIcon size={24} fill="var(--accent)"/>
            <span>Consultar Operações</span>
          </TabButton>
          <TabButton href="new">
            <PlusIcon size={24} fill="var(--accent)"/>
            <span>Nova Solicitação</span>
          </TabButton>
        </div>
      </main>
      <Footer />
    </>
  );
}
