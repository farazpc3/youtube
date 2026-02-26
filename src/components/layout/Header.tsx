"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex flex-row flex-nowrap bg-gray-600">
      <nav className="flex flex-row flex-nowrap  p-4 bg-black gap-4 mb-2">
        {pathname !== "/" && (
          <Link
            href="/"
            className="rounded-xl bg-gray-300 p-2 hover:bg-gray-500 hover:shadow-[0_0_20px_6px_rgba(163,230,53,0.9)]"
          >
            Home
          </Link>
        )}
        {pathname !== "/tic-tac-toe" && (
          <Link
            href="/tic-tac-toe"
            className="rounded-xl bg-gray-300 p-2 hover:bg-gray-500 hover:shadow-[0_0_20px_6px_rgba(163,230,53,0.9)]"
          >
            Tic Tac Toe app
          </Link>
        )}
      </nav>
    </header>
  );
}
