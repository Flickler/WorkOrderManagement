import Link from "next/link";

export function TabButton({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="tab__btn">        
      { children }
    </Link>
  );
}