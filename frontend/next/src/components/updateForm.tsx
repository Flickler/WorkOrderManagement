"use client";
import { updateChamado } from "@/hooks/updateChamado";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "../../node_modules/next/navigation";

type FormProps = {
  id: number;
  funcionario: string;
  titulo: string;
  descricao: string;
  status: boolean;
};

export function UpdateForm({ chamado }: { chamado: Chamado }) {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    const res = await updateChamado(data);
    router.push(`/apidog`)
  };

  return (
    <form className="forms" onSubmit={handleSubmit(onSubmit)}>
      <div className="fieldset">
        <label className="label">ID da solicitação</label>
        <input
          type="text"
          className="inputfield"
          placeholder="Nome e sobrenome"
          readOnly
          defaultValue={chamado.id}
          {...register("id", { required: true })}
        />
        {errors.funcionario && <span>O nome é obrigatorio</span>}
      </div>
      <div className="fieldset">
        <label className="label">Nome do solicitante</label>
        <input
          type="text"
          className="inputfield"
          placeholder="Nome e sobrenome"
          defaultValue={chamado.funcionario}
          {...register("funcionario", { required: true })}
        />
        {errors.funcionario && <span>O nome é obrigatorio</span>}
      </div>
      <div className="fieldset">
        <label className="label">Título do solicitação</label>
        <input
          type="text"
          className="inputfield"
          placeholder="Título da OS"
          defaultValue={chamado.titulo}
          {...register("titulo", { required: true })}
        />
        {errors.titulo && <span>O titulo é obrigatorio</span>}
      </div>
      <div className="fieldset">
        <label className="label">Descrição</label>
        <textarea
          className="inputfield"
          placeholder="Detalhamento"
          defaultValue={chamado.descricao}
          {...register("descricao", { required: true })}
        ></textarea>
        {errors.descricao && <span>A descrição é obrigatorio</span>}
      </div>
      <div className="fieldset">
        <label className="label">Status da Solicitação</label>
        <select className="inputfield" {...register("status")}>
          <option value="true">Aberta</option>
          <option value="false">Fechada</option>
        </select>
        {errors.titulo && <span>O titulo é obrigatorio</span>}
      </div>
      <button className="primary__btn" type="submit">
        Atualizar
      </button>
    </form>
  );
}
