import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  src: string;
  msg: string;
}

export function TabButton({ href, src, msg }: Props) {
  return (
    <Link href={href}>
      <button className="tab__btn">
        <span className="tab__icon">
          <Image
            src={src}
            width={16}
            height={16}
            alt="icon"
          />
        </span>
        <h2 className="h2">{msg}</h2>
      </button>
    </Link>
  );
}
