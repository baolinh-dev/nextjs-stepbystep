import { NextResponse } from "next/server";

export async function GET() {
  // Dữ liệu giả lập từ "backend"
  const posts = [
    { id: 1, title: "Next.js là gì?", content: "Giới thiệu về Next.js." },
    { id: 2, title: "SSR trong Next.js", content: "Cách hoạt động của SSR." },
    { id: 3, title: "CSR vs SSR vs SSG", content: "So sánh các phương pháp render." },
  ];

  return NextResponse.json(posts); // Trả về JSON
}
