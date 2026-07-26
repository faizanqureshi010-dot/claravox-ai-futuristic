import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-mist bg-white">
        <div className="container-page flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2" aria-label="Claravox Healthcare, go to homepage">
            <Logo className="h-8 w-auto object-contain" priority />
          </Link>
        </div>
      </header>
      <main id="main-content" className="flex-1">
        {children}
      </main>
    </>
  );
}
