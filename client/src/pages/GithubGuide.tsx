import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GithubAssets } from '@/components/GithubAssets.tsx';
import { GithubGuideStep } from '@/components/GithubGuideStep.tsx';

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
          <div className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle>プルリクエストの作成と管理</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  プルリクエストを使用して、コードの変更を提案し、レビューを受けることができます。
                </p>
              </CardContent>
            </Card>

            {/* 区切り線の上下に余白を追加 */}
            <div className="py-4">  {/* 上下のパディングを追加 */}
              <div className="border-t border-gray-200 dark:border-gray-800" />
            </div>

            <GithubGuideStep
              steps={[
                {
                  stepNumber: 1,
                  stepTitle: "リポジトリの選択",
                  src: "../assets/github/github1.png",
                  alt: "プロフィールを指し示す",
                  description: "右上のプロフィール画像をクリックしリポジトリを選択し該当のリポジトリを選択"
                },
                {
                  stepNumber: 2,
                  stepTitle: "プルリクエストの作成開始",
                  src: "../assets/github/github2.png",
                  alt: "プルリクエスト作成",
                  description: "プッシュしたブランチでPull Requestを作成する項目が出てくるのでCreateする"
                },
                {
                  stepNumber: 3,
                  stepTitle: "プルリクエストの内容記入",
                  src: "../assets/github/github3.png",
                  alt: "内容を記入し作成",
                  description: "内容を記入しCreate pull requestをクリックする"
                }
              ]}
            />
          </div>
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
