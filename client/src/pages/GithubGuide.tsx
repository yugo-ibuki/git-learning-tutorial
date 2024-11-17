import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GithubGuide() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">GitHub Guide</h1>

      <Tabs defaultValue="basics">
        <TabsList>
          <TabsTrigger value="basics">GitHub Basics</TabsTrigger>
          <TabsTrigger value="pr">Pull Requests</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="basics">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started with GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Creating a Repository</h3>
                  <p>Click the "+" icon in the top right corner and select "New repository"</p>
                </li>
                <li>
                  <h3 className="font-semibold">Cloning a Repository</h3>
                  <p>Use the green "Code" button to get the repository URL</p>
                </li>
                <li>
                  <h3 className="font-semibold">Repository Settings</h3>
                  <p>Manage collaborators, branches, and security in the Settings tab</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pr">
          <Card>
            <CardHeader>
              <CardTitle>Working with Pull Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal list-inside">
                <li>Create a new branch for your changes</li>
                <li>Push your changes to GitHub</li>
                <li>Click "Compare & pull request"</li>
                <li>Add description and request reviewers</li>
                <li>Submit the pull request</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="issues">
          <Card>
            <CardHeader>
              <CardTitle>Managing Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Creating Issues</h3>
                  <p>Use issues to track bugs, enhancements, and tasks</p>
                </li>
                <li>
                  <h3 className="font-semibold">Labels and Milestones</h3>
                  <p>Organize issues with labels and group them into milestones</p>
                </li>
                <li>
                  <h3 className="font-semibold">Issue Templates</h3>
                  <p>Create templates to standardize issue reporting</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
