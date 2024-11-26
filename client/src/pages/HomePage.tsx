import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Git & GitHubを学ぼう
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          バージョン管理と共同開発の基礎から応用まで、分かりやすく解説
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Git基礎</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Gitの基本的なコマンドと概念を学習</p>
            <Link href="/git-basics">
              <Button>はじめる</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gitワークフロー</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">ブランチ操作やマージの実践的な使い方</p>
            <Link href="/git-workflow">
              <Button>詳しく見る</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub活用ガイド</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">GitHubの機能と共同開発の進め方</p>
            <Link href="/github-guide">
              <Button>探索する</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
