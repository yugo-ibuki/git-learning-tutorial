import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export default function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-bold text-xl">
              Git Tutorial
            </Link>
            <div className="space-x-4">
              <Link href="/git-basics">
                <Button variant="ghost">Git基礎</Button>
              </Link>
              <Link href="/git-workflow">
                <Button variant="ghost">Gitワークフロー</Button>
              </Link>
              <Link href="/github-guide">
                <Button variant="ghost">GitHub活用</Button>
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
