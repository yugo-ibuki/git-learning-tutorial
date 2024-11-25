"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Copy } from "lucide-react"

interface CommandCardProps {
  command: string
  description: string
  example?: string
  useCase?: string
  tips?: string
}

export function CommandCard({
  command,
  description,
  example,
  useCase,
  tips,
}: CommandCardProps) {
  const { toast } = useToast()

  const copyCommand = async () => {
    await navigator.clipboard.writeText(command)
    toast({
      title: "コピーしました",
    })
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <code className="bg-muted px-2 py-1 rounded">{command}</code>
              <Button size="sm" variant="ghost" onClick={copyCommand}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">
              {description}
            </p>
            {example && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-1">使用例:</h4>
                <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
                  <code>{example}</code>
                </pre>
              </div>
            )}
            {useCase && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-1">使用シーン:</h4>
                <p className="text-sm text-muted-foreground">{useCase}</p>
              </div>
            )}
            {tips && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-1">Tips:</h4>
                <p className="text-sm text-muted-foreground">{tips}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
