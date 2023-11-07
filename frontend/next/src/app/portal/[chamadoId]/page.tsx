import { Header } from "@/components/header";
import { Modal } from "@/components/modal";
import { UpdateForm } from "@/components/updateForm";
import { getChamado } from "@/hooks/getChamado";

type Props = {
  params: {
    chamadoId: string;
  };
};

export default async function UpdateChamado({ params: { chamadoId } }: Props) {
  const chamado = await getChamado(chamadoId);

  return (
    <>
      <Header heading="Atualizar" />
      <Modal>
        <UpdateForm chamado={chamado} />
      </Modal>
    </>
  );
}
