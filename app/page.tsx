import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import Greeting from "@/components/Greeting";
import Card from "@/components/Card"

export default function Home() {
  return (
    <search className="p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card title="a" body="b"/>
        <Card title="a" body="b"/>
        <Card title="a" body="b"/>
      </div>
    </search>
    
  );
}
