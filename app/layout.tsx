import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "MyWeb",
  description: "เว็บแรกด้วย Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-slate-50 text-slate-800">
        <LanguageProvider>
          <Suspense>
            <Navbar />
          </Suspense>
          <main className="mx-auto max-w-5xl">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}

