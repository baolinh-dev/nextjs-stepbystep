export async function GET() {
    const posts = [
        { id: 1, title: "Next.js là gì?", content: "Next.js là framework React tối ưu." },
        { id: 2, title: "Tại sao chọn Next.js?", content: "Next.js hỗ trợ SSR, SEO tốt hơn React." },
    ];

    return Response.json(posts);
}
