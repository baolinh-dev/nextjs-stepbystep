import { NextApiRequest, NextApiResponse } from "next";

const posts = [
  { id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1" },
  { id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2" },
  { id: 3, title: "Bài viết 3", content: "Nội dung bài viết 3" },
  { id: 4, title: "Bài viết 4", content: "Nội dung bài viết 4" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const { id } = req.query;

      if (id) {
        const post = posts.find((p) => p.id.toString() === id);
        if (!post) {
          return res.status(404).json({ message: "Không tìm thấy bài viết" });
        }
        return res.status(200).json(post);
      }

      return res.status(200).json(posts);
    }

    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Lỗi API:", error);
    return res.status(500).json({ message: "Lỗi server" });
  }
}
