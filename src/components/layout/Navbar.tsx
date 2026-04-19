"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchBar } from "./SearchBar";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/favorites", label: "Favoritos" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link href="/" className="text-xl font-bold text-yellow-400">
          MovieApp
        </Link>
        <nav className="hidden gap-4 sm:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors hover:text-white ${
                pathname === href ? "text-white" : "text-zinc-400"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto w-full max-w-xs">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
