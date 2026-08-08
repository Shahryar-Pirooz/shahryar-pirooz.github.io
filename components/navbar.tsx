"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Tech", "#tech"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-[#071312]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="font-bold tracking-tight">
          Shahryar<span className="text-emerald-400">.</span>
        </a>

        <button
          className="rounded-xl border border-border p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-muted transition hover:text-foreground">
              {label}
            </a>
          ))}
          <a
            href="https://github.com/Shahryar-Pirooz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-emerald-400/30 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10"
          >
            GitHub
          </a>
        </div>
      </div>

      {open && (
        <div className="border-t border-border px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-muted">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}