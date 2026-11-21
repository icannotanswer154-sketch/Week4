type CardProps = {
  title: string;
  body: string;
};

export default function Card({ title, body }: CardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2 text-slate-600">{body}</p>
    </div>
  );
}
