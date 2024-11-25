"use client"

import { CodeBlock } from "@/components/CodeBlock"
import { CommandCard } from "@/components/CommandCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { gitWorkflowCommands } from "@/lib/git-commands"

export default function GitWorkflow() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Gitワークフロー</h1>

      <Card>
        <CardHeader>
          <CardTitle>ブランチとマージの操作</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">ブランチを効果的に使用する方法：</p>
          <div className="space-y-4">
            {gitWorkflowCommands.branching.map((command) => (
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
          <CardTitle>機能開発の作業手順</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">新機能開発の一般的な手順：</p>
          <CodeBlock
            code={`# 新しい機能用のブランチを作成して切り替え
git checkout -b feature/new-feature

# 変更を加えてコミット
git add .
git commit -m "新機能を追加"

# 機能ブランチをプッシュ
git push origin feature/new-feature

# mainブランチに戻ってマージ
git checkout main
git merge feature/new-feature`}
            language="bash"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>高度なGit操作</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {gitWorkflowCommands.advanced.map((command) => (
              <CommandCard
                key={command.command}
                command={command.command}
                description={command.description}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
