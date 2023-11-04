import KeyIcon from "@/icons/KeyIcon";
import PencilIcon from "@/icons/pencilIcon";
import TrashIcon from "@/icons/trashIcon";

export function Card() {
  return (
    <div className="card">
      <div className="card__actions">
        <span className="card__label" id="os-key">
          <KeyIcon />
          ID
        </span>
        <div className="btn__group">
          <button>
            <PencilIcon />
          </button>
          <button>
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className="card__title">Título da OS</div>
      <div className="card__content">
        <p className="description">Descrição da OS</p>
        <span className="bullet"></span>
        <p className="description">Nome do Responsável</p>
      </div>
      <div className="badge" id="os-status">
        Concluído
      </div>
    </div>
  );
}
