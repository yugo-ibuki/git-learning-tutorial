import { CodeBlock } from "../components/CodeBlock";
import { CommandCard } from "../components/CommandCard";
import { gitBasicsCommands } from "../lib/git-commands";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GitBasics() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Git Basics</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Setting Up Git</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Configure your Git environment with these essential commands:</p>
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
          <CardTitle>Basic Git Commands</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Essential commands for everyday Git usage:</p>
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
          <CardTitle>Example Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">A typical Git workflow looks like this:</p>
          <CodeBlock
            code={`git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main`}
            language="bash"
          />
        </CardContent>
      </Card>
    </div>
  );
}
