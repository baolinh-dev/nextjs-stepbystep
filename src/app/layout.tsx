export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="vi">
          <body>
              <h1>📝 Blog Next.js</h1>
              {children}
          </body>
      </html>
  );
}
