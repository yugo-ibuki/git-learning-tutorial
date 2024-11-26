interface GitCommand {
  command: string;
  description: string;
  example?: string;
  useCase?: string;
  tips?: string;
}

interface GitCommands {
  setup: GitCommand[];
  basic: GitCommand[];
  branching: GitCommand[];
  advanced: GitCommand[];
}

export const gitBasicsCommands: Pick<GitCommands, 'setup' | 'basic'> = {
  setup: [
    {
      command: "git config --global user.name \"Your Name\"",
      description: "Gitの初期設定。ユーザー名とメールアドレスを設定して、あなたの変更が誰のものか分かるようにします",
      example: "git config --global user.name \"山田太郎\"",
      useCase: "新しい環境でGitを使い始める時や、設定を変更したい時に使用します",
      tips: "globalフラグを付けると全てのリポジトリに適用されます。特定のリポジトリのみ設定する場合は--globalを省略します"
    },
    {
      command: "git config --global user.email \"your@email.com\"",
      description: "メールアドレスの設定。GitHubなどのサービスと連携する際に使用されます",
      example: "git config --global user.email \"yamada@example.com\"",
      useCase: "GitHubアカウントと紐付けるために、GitHubに登録したメールアドレスを設定します",
      tips: "公開リポジトリの場合、このメールアドレスは公開されることがあります"
    },
    {
      command: "git init",
      description: "新しいGitリポジトリを作成。プロジェクトのバージョン管理を開始します",
      example: "git init my-project",
      useCase: "新規プロジェクトを開始する時や、既存のプロジェクトをバージョン管理下に置く時に使用します",
      tips: "空のディレクトリで実行すると.gitディレクトリが作成されます"
    }
  ],
  basic: [
    {
      command: "git status",
      description: "現在の作業状態を確認。変更されたファイル、ステージングの状態などが分かります",
      example: "git status",
      useCase: "作業中のファイルの状態を確認したい時、コミットする前の確認に使用します",
      tips: "git status -sで簡潔な表示が可能です"
    },
    {
      command: "git add",
      description: "変更したファイルをGitの管理対象として登録する作業です\nスーパーのお買い物かごのようなイメージです",
      example: "# 特定のファイルを追加\ngit add ファイル名.txt\n\n# 全ての変更ファイルを追加\ngit add .\n\n# 変更状態を確認\ngit status",
      useCase: "変更したファイルをコミットする準備として使用します",
      tips: "git add . で全ての変更をまとめて追加できます"
    },
    {
      command: "git commit",
      description: "addで登録した変更内容を記録する作業です\nお買い物かごの商品をレジで精算するようなイメージです\n必ず変更内容を説明するメッセージをつけます",
      example: "# 変更内容を記録\ngit commit -m \"ログイン機能を追加\"\n\n# addとcommitを同時に行う（新規ファイル以外）\ngit commit -am \"バグを修正\"\n\n# コミット履歴を確認\ngit log",
      useCase: "機能追加やバグ修正など、作業が一段落したタイミングで使用します",
      tips: "-amオプションを使うと、変更のあるファイルの追加とコミットを同時に行えます"
    },
    {
      command: "git push",
      description: "ローカル（自分のPC）での変更をリモートリポジトリ（GitHubなど）にアップロードする作業です\n完成した成果物を提出するようなイメージです",
      example: "# 変更をリモートリポジトリにアップロード\ngit push origin main\n\n# 初回push時\ngit push -u origin main",
      useCase: "ローカルでの作業が完了し、他の開発者と共有する準備が整った時に使用します",
      tips: "初回push時は-uオプションを使うと、以降は単にgit pushだけで済むようになります"
    }
  ]
};

export const gitWorkflowCommands: Pick<GitCommands, 'branching' | 'advanced'> = {
  branching: [
    {
      command: "git branch",
      description: "ブランチの一覧表示と作成。平行して開発を進めるために使います",
      example: "git branch feature/login",
      useCase: "新機能の開発や修正を独立して進める時に使用します",
      tips: "git branch -aでリモートブランチも含めて全て表示します"
    },
    {
      command: "git checkout -b <branch-name>",
      description: "ブランチの切り替えや特定のコミットに移動します",
      example: "git checkout -b feature/signup",
      useCase: "新機能の開発を始める時や、別の作業に切り替える時に使用します",
      tips: "git checkout -は直前のブランチに戻ります"
    },
    {
      command: "git merge <branch-name>",
      description: "ブランチの統合。開発した機能を統合するときに使用します",
      example: "git merge feature/login",
      useCase: "開発が完了した機能を統合する時や、他の開発者の変更を取り込む時に使用します",
      tips: "コンフリクトが発生した場合は、慎重に解決する必要があります"
    }
  ],
  advanced: [
    {
      command: "git rebase <branch>",
      description: "ブランチの履歴を整理。コミット履歴を線形に保ちます",
      example: "git rebase main",
      useCase: "複数の機能ブランチを統合する前に履歴を整理する時に使用します",
      tips: "公開ブランチでのrebaseは避け、ローカルブランチでのみ使用します"
    },
    {
      command: "git cherry-pick <commit>",
      description: "特定のコミットの変更を現在のブランチに適用します",
      example: "git cherry-pick abc123",
      useCase: "他のブランチの特定の変更だけを取り込みたい時に使用します",
      tips: "コンフリクトが発生する可能性があるので注意が必要です"
    },
    {
      command: "git stash",
      description: "作業中の変更を一時的に保存します",
      example: "git stash save \"作業中の変更\"",
      useCase: "急な割り込み作業が入った時に、現在の作業を一時保存するために使用します",
      tips: "git stash listで保存した変更の一覧を確認できます"
    }
  ]
};
