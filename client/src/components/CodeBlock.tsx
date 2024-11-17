import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-git';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: "コピーしました",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const highlighted = Prism.highlight(code, Prism.languages[language], language);

  return (
    <div className="relative">
      <pre className="rounded-lg bg-zinc-950 p-4 overflow-x-auto">
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2"
        onClick={copyCode}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}
