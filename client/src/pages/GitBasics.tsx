import { CodeBlock } from "../components/CodeBlock";
import { CommandCard } from "../components/CommandCard";
import { gitBasicsCommands } from "../lib/git-commands";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GitBasics() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Git基礎</h1>

      <Card>
        <CardHeader>
          <CardTitle>Gitの設定</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Gitの環境設定に必要な基本的なコマンド：</p>
          <div className="space-y-4">
            {gitBasicsCommands.setup.map((command) => (
              <CommandCard
                key={command.command}
                command={command.command}
                description={command.description}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>基本的なGitコマンド</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">日々の開発で使用する基本的なコマンド：</p>
          <div className="space-y-4">
            {gitBasicsCommands.basic.map((command) => (
              <CommandCard
                key={command.command}
                command={command.command}
                description={command.description}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>基本的な作業の流れ</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">一般的なGitの作業手順：</p>
          <CodeBlock
            code={`# 新しいリポジトリを作成
git init

# 変更をステージングに追加
git add .

# 最初のコミットを作成
git commit -m "最初のコミット"

# リモートリポジトリを追加
git remote add origin https://github.com/username/repo.git

# 変更をプッシュ
git push -u origin main`}
            language="bash"
          />
        </CardContent>
      </Card>
    </div>
  );
}
