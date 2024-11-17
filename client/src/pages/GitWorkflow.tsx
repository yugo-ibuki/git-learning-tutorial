import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "../components/CodeBlock";
import { CommandCard } from "../components/CommandCard";
import { gitWorkflowCommands } from "../lib/git-commands";

export default function GitWorkflow() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Git Workflow</h1>

      <Card>
        <CardHeader>
          <CardTitle>Branching and Merging</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Learn how to work with branches effectively:</p>
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
          <CardTitle>Feature Branch Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Common workflow for developing new features:</p>
          <CodeBlock
            code={`# Create and switch to a new feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push the feature branch
git push origin feature/new-feature

# Switch back to main and merge
git checkout main
git merge feature/new-feature`}
            language="bash"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Git Operations</CardTitle>
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
  );
}
