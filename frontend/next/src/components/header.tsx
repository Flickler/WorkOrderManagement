import Link from "next/link";
import ChevronLeftIcon from "@/icons/chevronLeftIcon";

export function Header({ heading }: { heading: string }){
  return (
    <header className="header">
        <div className="headline__section" id="page-headline-section">
            <Link href="home" className="link__btn h3">
                <ChevronLeftIcon fill="var(--accent)"/>
                <span>Voltar</span>
            </Link>
            <h1 className="h1">
                { heading }
            </h1>
        </div>
    </header>
  )
}