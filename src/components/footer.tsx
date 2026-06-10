import Image from "next/image";
import Link from "next/link";
import { AtSign, Send, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/logo-z.jpg"
              alt="Comunidade Z"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-white">
            Comunidade Z
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <Link href="#" className="transition-colors hover:text-white">
            Termos
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            Privacidade
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            aria-label="Instagram"
            className="text-white/60 transition-colors hover:text-white"
          >
            <AtSign className="size-5" />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="text-white/60 transition-colors hover:text-white"
          >
            <Send className="size-5" />
          </Link>
          <Link
            href="#"
            aria-label="YouTube"
            className="text-white/60 transition-colors hover:text-white"
          >
            <Music2 className="size-5" />
          </Link>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Comunidade Z. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
