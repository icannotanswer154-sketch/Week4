"use client";

import { useEffect, useState } from "react";

type Hello = {
  message: string;
  time: string;
};

export default function HelloPage() {
  const [data, setData] = useState<Hello | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/hello", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData(await res.json());
    } catch {
      setError("เรียก API ไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="mx-auto max-w-md p-8">
      <div className="rounded-xl bg-gradient-to-br from-sky-100 to-blue-200 p-6 shadow ring-1 ring-blue-100">
        <h1 className="text-lg font-bold text-black">/api/hello</h1>

        {loading && <p className="mt-2 text-slate-900">กำลังโหลด...</p>}
        {error && <p className="mt-2 text-red-700">{error}</p>}
        {data && !loading && (
          <>
            <p className="mt-2 text-slate-900">{data.message}</p>
            <p className="mt-1 text-sm text-slate-700">
              {new Date(data.time).toLocaleString("th-TH")}
            </p>
          </>
        )}

        <button
          onClick={load}
          disabled={loading}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          เรียกอีกครั้ง
        </button>
      </div>
    </main>
  );
}

