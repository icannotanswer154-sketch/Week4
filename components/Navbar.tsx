"use client";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import BtMaode from "@/components/ThemeToggle";

export default function Navbar() {
  const { lang, setLang, t } = useLang();

  const links = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/posts", label: t.posts },
    { href: "/count", label: t.count },
    { href: "/hello", label: t.helloMenu },
  ];

  const toggleLang = () => {
    setLang(lang === "th" ? "en" : "th");
  };

  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex items-center justify-between p-4">
        <button
          type="button"
          onClick={toggleLang}
          className="text-xl font-bold hover:text-sky-400 cursor-pointer"
        >
          {lang === "th" ? "MyWeb (ไทย)" : "MyWeb"}
        </button>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-sky-400"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-lg border border-slate-600 px-3 py-1 cursor-pointer"
          >
            {lang === "th" ? "TH" : "EN"}
          </button>
          <BtMaode />
        </div>
      </div>
    </nav>
  );
}