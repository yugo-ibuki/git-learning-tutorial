import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GithubAssets } from '@/components/GithubAssets.tsx';

export default function GithubGuide() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">GitHub活用ガイド</h1>

      <Tabs defaultValue="basics">
        <TabsList>
          <TabsTrigger value="basics">GitHubの基本</TabsTrigger>
          <TabsTrigger value="pr">プルリクエスト</TabsTrigger>
          <TabsTrigger value="issues">イシュー（課題管理）</TabsTrigger>
        </TabsList>

        <TabsContent value="basics">
          <Card>
            <CardHeader>
              <CardTitle>GitHubを始めよう</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">リポジトリの作成</h3>
                  <p>画面右上の「+」アイコンをクリックし、「New repository」を選択します</p>
                </li>
                <li>
                  <h3 className="font-semibold">リポジトリのクローン</h3>
                  <p>緑色の「Code」ボタンからリポジトリのURLを取得します</p>
                </li>
                <li>
                  <h3 className="font-semibold">リポジトリの設定</h3>
                  <p>Settings タブから、共同開発者の追加やブランチの保護、セキュリティ設定などを管理できます</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pr">
          <Card>
            <CardHeader>
              <CardTitle>プルリクエストの作成と管理</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal list-inside">
                <li>変更用の新しいブランチを作成</li>
                <li>変更をGitHubにプッシュ</li>
                <li>「Compare & pull request」をクリック</li>
                <li>説明を追加してレビュアーを指定</li>
                <li>プルリクエストを送信</li>
              </ol>
            </CardContent>
          </Card>
          <GithubAssets
            title="プルリクエストの作成手順"
            assets={[
              {
                src: "../assets/github/github1.png",
                alt: "プルリクエスト作成画面",
                description: "プルリクエストの作成方法"
              },
              {
                src: "../assets/github/github2.png",
                alt: "プルリクエストレビュー画面",
                description: "プルリクエストのレビュー方法"
              },
              {
                src: "../assets/github/github3.png",
                alt: "プルリクエストマージ画面",
                description: "プルリクエストのマージ方法"
              }
            ]}
            columns={3}
          />

        </TabsContent>

        <TabsContent value="issues">
          <Card>
            <CardHeader>
              <CardTitle>イシューの管理</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">イシューの作成</h3>
                  <p>バグの報告や機能改善の提案、タスクの管理にイシューを使用します</p>
                </li>
                <li>
                  <h3 className="font-semibold">ラベルとマイルストーン</h3>
                  <p>ラベルでイシューを分類し、マイルストーンでグループ化して進捗を管理します</p>
                </li>
                <li>
                  <h3 className="font-semibold">イシューテンプレート</h3>
                  <p>イシュー報告の形式を統一するためのテンプレートを作成できます</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
