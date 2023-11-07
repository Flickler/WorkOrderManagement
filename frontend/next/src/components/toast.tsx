import CheckIcon from "@/icons/checkIcon";
import XCircleIcon from "@/icons/xCircleIcon";

export function Toast({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "warn" | "sucess";
}) {
  return (
    <div className={`toast-${type}`}>
      {type === "warn" ? <XCircleIcon size={20} fill="#da296a"/> : <CheckIcon size={20} fill="#29daaf"/>}
      <span>{children}</span>
    </div>
  );
}
