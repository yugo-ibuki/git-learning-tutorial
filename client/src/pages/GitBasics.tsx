import { useState, useEffect } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { CommandCard } from "../components/CommandCard";
import { gitBasicsCommands } from "../lib/git-commands";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function GitBasics() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    // ローカルストレージから保存されたデータを取得
    const storedData = localStorage.getItem("gitUsername");
    if (storedData) {
      const { value, expires } = JSON.parse(storedData);
      if (expires > Date.now()) {
        setUsername(value);
      } else {
        localStorage.removeItem("gitUsername");
      }
    }
  }, []);
  const handleSaveUsername = () => {
    // 1時間後の有効期限を設定
    const expires = Date.now() + 60 * 60 * 1000;
    localStorage.setItem(
      "gitUsername",
      JSON.stringify({
        value: username,
        expires,
      }),
    );
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Git基礎</h1>

      <Card>
        <CardHeader>
          <CardTitle>ユーザー設定</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm text-muted-foreground mb-2 block">
                Gitユーザー名
              </label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="例: 山田太郎"
              />
            </div>
            <Button onClick={handleSaveUsername}>保存</Button>
          </div>
          {username && (
            <CodeBlock
              className="mt-4"
              code={`git config --global user.name "${username}"`}
              language="bash"
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SSH設定</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">SSHキーの生成と設定：</p>
          <CodeBlock
            code={`# SSHキーを生成 (4096ビットの強力な暗号化)
ssh-keygen -t rsa -b 4096 -C "${username}" -f id_rsa_github

# .sshディレクトリがない場合は作成
mkdir -p ~/.ssh

# 生成した鍵を.sshディレクトリに移動
mv id_rsa_github* ~/.ssh/

# 適切なパーミッションを設定
chmod 600 ~/.ssh/id_rsa_github
chmod 644 ~/.ssh/id_rsa_github.pub

# 公開キーを表示（これをGitHubに登録）
cat ~/.ssh/id_rsa_github.pub

# GitHubとの接続をテスト
ssh -T git@github.com`}
            language="bash"
          />
          <div className="mt-4 text-sm text-muted-foreground">
            <p>💡 生成された公開キーを<a
              href="https://github.com/settings/keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >GitHub Settings {">"} SSH and GPG keys</a>に登録してください。</p>
            <p>💡 パーミッション設定は秘密鍵のセキュリティを確保するために重要です。</p>
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
          <div className="space-y-4">
            <CodeBlock
              code={`# 新しいリポジトリを作成
git init
# 変更をステージングに追加
git add .
# 最初のコミットを作成
git commit -m "最初のコミット"
# リモートリポジトリを追加（SSH）
git remote add origin git@github.com:${username}/repo.git
# 変更をプッシュ
git push -u origin main`}
              language="bash"
            />

            <div className="mt-4 text-sm text-muted-foreground">
              <p>💡 SSHを使用すると、毎回パスワードを入力する必要がなくなります。</p>
              <p>SSHキーの設定方法は「SSH設定」セクションをご確認ください。</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
