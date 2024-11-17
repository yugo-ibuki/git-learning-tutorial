import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Learn Git & GitHub
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master version control and collaborative development with our comprehensive
          guide to Git and GitHub.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Git Basics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Learn fundamental Git commands and concepts.</p>
            <Link href="/git-basics">
              <Button>Get Started</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Git Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Master branching, merging, and best practices.</p>
            <Link href="/git-workflow">
              <Button>Learn More</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Explore GitHub's features and collaboration tools.</p>
            <Link href="/github-guide">
              <Button>Explore</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
