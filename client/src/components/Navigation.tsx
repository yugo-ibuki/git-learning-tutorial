import { Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <Button variant="link" className="text-xl font-bold p-0">
                Gitチュートリアル
              </Button>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/git-basics">
                <Button
                  variant={location === "/git-basics" ? "default" : "ghost"}
                >
                  Git基礎
                </Button>
              </Link>
              <Link href="/git-workflow">
                <Button
                  variant={location === "/git-workflow" ? "default" : "ghost"}
                >
                  Gitワークフロー
                </Button>
              </Link>
              <Link href="/github-guide">
                <Button
                  variant={location === "/github-guide" ? "default" : "ghost"}
                >
                  GitHub活用ガイド
                </Button>
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
