"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

type Post = { id: number; title: string; body: string };

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []); // [] = ทำครั้งเดียวตอนเปิดหน้า

  if (loading) {
    return <p className="p-8 text-slate-500">กำลังโหลด...</p>;
  }

  return (
    <section className="p-8">
      <h1 className="mb-6 text-3xl font-bold">บทความล่าสุด</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}
            title={post.title} body={post.body} />
        ))}
      </div>
    </section>
  );
}

