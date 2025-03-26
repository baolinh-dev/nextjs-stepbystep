import Counter from "./components/Counter";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Danh sách thẻ</h1>
      <Counter initialCount={10} />
    </div>
  );
}
