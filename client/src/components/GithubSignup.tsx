import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubAssets } from "@/components/GithubAssets";

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
            <GithubAssets
              title="GitHubアカウント作成ステップ"
              assets={[
                {
                  src: "/github/signup1.png",
                  alt: "GitHubトップページ",
                  description: "GitHubトップページの「Sign up」ボタンをクリック"
                },
                {
                  src: "/github/signup2.png",
                  alt: "メールアドレス入力",
                  description: "メールアドレスを入力して「Continue」をクリック"
                },
                {
                  src: "/github/signup3.png",
                  alt: "パスワード設定",
                  description: "強力なパスワードを設定（8文字以上、数字と記号を含む）"
                },
                {
                  src: "/github/signup4.png",
                  alt: "ユーザー名設定",
                  description: "一意のユーザー名を設定（後で変更可能）"
                }
              ]}
            />
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