import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react';

export default function GithubSignup() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">GitHubアカウントの作成方法</h1>

      <Card>
        <CardHeader>
          <CardTitle>アカウント作成の手順</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-green-500"/>
              </div>
              <div>
                <h3 className="font-semibold">ステップ 1: GitHub.comにアクセス</h3>
                <p className="text-sm text-gray-600">
                  GitHubのトップページ（github.com）にアクセスし、右上の「Sign up」ボタンをクリックします
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-green-500"/>
              </div>
              <div>
                <h3 className="font-semibold">ステップ 2: メールアドレスの入力</h3>
                <p className="text-sm text-gray-600">
                  有効なメールアドレスを入力します。このメールアドレスは確認メールの送信や通知に使用されます
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-green-500"/>
              </div>
              <div>
                <h3 className="font-semibold">ステップ 3: パスワードの設定</h3>
                <p className="text-sm text-gray-600">
                  安全なパスワードを設定してください：
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                  <li>8文字以上の長さ</li>
                  <li>1つ以上の数字を含む</li>
                  <li>1つ以上の小文字を含む</li>
                  <li>1つ以上の記号を含む</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-green-500"/>
              </div>
              <div>
                <h3 className="font-semibold">ステップ 4: ユーザー名の設定</h3>
                <p className="text-sm text-gray-600">
                  一意のユーザー名を設定します。これはあなたのGitHubプロフィールのURLとなります
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>アカウント設定のポイント</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>ユーザー名は後から変更可能ですが、リポジトリのURLにも使用されるため、慎重に選びましょう</li>
            <li>プロフィール画像やバイオは後から設定できます</li>
            <li>二要素認証の設定を推奨します（セキュリティ向上）</li>
            <li>プロフィールページはポートフォリオとしても活用できます</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}