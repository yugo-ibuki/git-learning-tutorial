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
    <html lang="ja" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="system" storageKey="git-tutorial-theme">
          <Navigation />
          <main className="container mx-auto py-8 px-4">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
