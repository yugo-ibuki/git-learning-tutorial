import type { ReactNode } from "react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <main className="container mx-auto py-8 px-4">{children}</main>
      </body>
    </html>
  )
}
