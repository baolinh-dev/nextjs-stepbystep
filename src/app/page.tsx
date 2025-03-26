// src/app/page.tsx
import Card from "./components/Card"; 

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Danh sách thẻ</h1>
      <Card title="Thẻ 1" description="Đây là thẻ đầu tiên." />
      <Card title="Thẻ 2" description="Đây là thẻ thứ hai."  imageUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  );
}
