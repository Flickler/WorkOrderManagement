'use client'

import { deleteChamado } from "@/hooks/deleteChamado";
import KeyIcon from "@/icons/KeyIcon";
import PencilIcon from "@/icons/pencilIcon";
import TrashIcon from "@/icons/trashIcon";

export function Card({ chamado }: { chamado: Chamado }) {
  return (
    <div className="card">
      <div className="card__actions">
        <span className="card__label" id="os-key">
          <KeyIcon size={14} fill="var(--gray-300)" />
          {chamado.id}
        </span>
        <div className="btn__group">
          <button>
            <PencilIcon size={14} fill="var(--gray-300)" />
          </button>
          <button onClick={() => deleteChamado(chamado.id)}>
            <TrashIcon size={14} fill="var(--gray-300)" />
          </button>
        </div>
      </div>
      <div className="card__title">{chamado.titulo}</div>
      <div className="card__content">
        <p className="description">{chamado.descricao}</p>
        <span className="bullet"></span>
        <p className="description">{chamado.funcionario}</p>
      </div>
      <div className="badge" id="os-status">
        {chamado.status ? 'Aberto' : 'Fechado'}
      </div>
    </div>
  );
}
