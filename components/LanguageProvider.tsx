"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { dict, type Lang } from "@/lib/i18n";

type LangContextType = { lang: Lang; setLang: (lang: Lang) => void };
const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("th");

  useEffect(() => {
    // บอกเบราว์เซอร์และ Google ว่าหน้านี้เป็นภาษาอะไร
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext value={{ lang, setLang }}>
      {children}
    </LangContext>
  );
}

export function useLang() {
  const ctx = useContext(LangContext)!;
  return { ...ctx, t: dict[ctx.lang] };
}

