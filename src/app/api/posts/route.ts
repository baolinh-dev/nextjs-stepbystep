import { NextResponse } from "next/server";

let posts = [
  { id: 1, title: "Next.js là gì?", content: "Giới thiệu về Next.js." },
  { id: 2, title: "SSR trong Next.js", content: "Cách hoạt động của SSR." },
  {
    id: 3,
    title: "CSR vs SSR vs SSG",
    content: "So sánh các phương pháp render.",
  },
];

export async function GET() {
  // Dữ liệu giả lập từ "backend"
  return NextResponse.json(posts); // Trả về JSON
}

// 📌 Thêm bài viết mới (POST)
export async function POST(req: Request) {
  const { title, content } = await req.json();
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);

  return NextResponse.json(newPost, { status: 201 });
}

// 📌 Cập nhật bài viết (PUT)
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id, 10);
  const { title, content } = await req.json();

  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy bài viết" },
      { status: 404 }
    );
  }

  posts[postIndex] = { id: postId, title, content };
  return NextResponse.json(posts[postIndex], { status: 200 });
}

// 📌 Xóa bài viết (DELETE)
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id, 10);
  posts = posts.filter((p) => p.id !== postId);

  return NextResponse.json(
    { message: "Bài viết đã được xóa" },
    { status: 200 }
  );
}
