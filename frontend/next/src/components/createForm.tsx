"use client";

import { createChamado } from "@/hooks/createChamado";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toast } from "./toast";

type FormProps = {
  funcionario: string;
  titulo: string;
  descricao: string;
};

export function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    const res = await createChamado(data);
    reset();
    if(res.id) alert("created");
  }
  return (
    <form className="forms" onSubmit={handleSubmit(onSubmit)}>
      {(errors.funcionario || errors.titulo || errors.descricao) && <Toast type="warn">Os campos são obrigatórios</Toast>}
      <div className="fieldset">
        <label className="label">Nome do solicitante</label>
        <input
          type="text"
          className="inputfield"
          placeholder="Nome e sobrenome"
          {...register("funcionario", { required: true })}
        />
      </div>
      <div className="fieldset">
        <label className="label">Título do solicitação</label>
        <input
          type="text"
          className="inputfield"
          placeholder="Título da OS"
          defaultValue={""}
          {...register("titulo", { required: true })}
        />
      </div>
      <div className="fieldset">
        <label className="label">Descrição</label>
        <textarea
          className="inputfield"
          placeholder="Detalhamento"
          defaultValue={""}
          {...register("descricao", { required: true })}
        ></textarea>
      </div>
      <button className="primary__btn" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
