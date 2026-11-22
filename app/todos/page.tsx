"use client";
import { addTodo } from "@/lib/todos";
import { useEffect, useState } from "react";

export default function Todospase() {
  const [title, setTitle] = useState("");

  return (
      <main>
        <form onSubmit={addTodo} className="flex flex-col gap-2">
          <input 
            type="text" 
            placeholder="เพิ่มรายการใหม่"
            className="border p-2 rounded w-full mb-4" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /> 
          <button className="bg-blue-500 text-white p-2 rounded">เพิ่มรายการ</button>
         </form>
      </main>
  );
}
