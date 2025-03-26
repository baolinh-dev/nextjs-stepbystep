// src/app/page.tsx
import Card from "./components/Card"; 

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Danh sách thẻ</h1>
      <Card title="Thẻ 1" description="Đây là thẻ đầu tiên." />
      <Card title="Thẻ 2" description="Đây là thẻ thứ hai." />
    </div>
  );
}
