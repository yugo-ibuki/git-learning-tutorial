interface GitCommand {
  command: string;
  description: string;
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
      description: "Set your name for all Git repositories"
    },
    {
      command: "git config --global user.email \"your@email.com\"",
      description: "Set your email for all Git repositories"
    },
    {
      command: "git init",
      description: "Initialize a new Git repository"
    }
  ],
  basic: [
    {
      command: "git status",
      description: "Check the status of your working directory"
    },
    {
      command: "git add <file>",
      description: "Add a file to the staging area"
    },
    {
      command: "git commit -m \"message\"",
      description: "Commit staged changes with a message"
    },
    {
      command: "git log",
      description: "View commit history"
    }
  ]
};

export const gitWorkflowCommands: Pick<GitCommands, 'branching' | 'advanced'> = {
  branching: [
    {
      command: "git branch",
      description: "List all local branches"
    },
    {
      command: "git checkout -b <branch-name>",
      description: "Create and switch to a new branch"
    },
    {
      command: "git merge <branch-name>",
      description: "Merge a branch into the current branch"
    }
  ],
  advanced: [
    {
      command: "git rebase <branch>",
      description: "Rebase current branch onto another branch"
    },
    {
      command: "git cherry-pick <commit>",
      description: "Apply changes from a specific commit"
    },
    {
      command: "git stash",
      description: "Temporarily save uncommitted changes"
    }
  ]
};
