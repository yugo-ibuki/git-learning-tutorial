import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CommandCardProps {
  command: string;
  description: string;
}

export function CommandCard({ command, description }: CommandCardProps) {
  const { toast } = useToast();

  const copyCommand = async () => {
    await navigator.clipboard.writeText(command);
    toast({
      title: "Copied to clipboard",
      description: "The command has been copied to your clipboard.",
    });
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <code className="bg-muted px-2 py-1 rounded">{command}</code>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
          <Button size="sm" variant="ghost" onClick={copyCommand}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
