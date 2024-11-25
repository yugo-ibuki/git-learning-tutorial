import type { ReactNode } from "react"
import "./globals.css"
import Navigation from "@/components/Navigation"
import { ThemeProvider } from "@/components/ui/theme-provider"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <ThemeProvider defaultTheme="system" storageKey="git-tutorial-theme">
        <body>
          <Navigation />
          <main className="container mx-auto py-8 px-4">{children}</main>
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  )
}
