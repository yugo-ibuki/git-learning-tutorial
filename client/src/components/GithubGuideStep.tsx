import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface StepItem {
  src: string;
  alt: string;
  description: string;
  stepNumber: number;
  stepTitle: string;
}

interface GithubGuideStepProps {
  steps: StepItem[];
}

export function GithubGuideStep({ steps }: GithubGuideStepProps) {
  const [selectedImage, setSelectedImage] = useState<StepItem | null>(null);
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={step.stepNumber}>
          {/* 区切り線 */}
          {index > 0 && (
            <div className="border-t border-border/40 my-6" />
          )}

          <div className="flex gap-6 items-start">
            {/* ステップ番号とライン */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {step.stepNumber}
              </div>
              {step.stepNumber !== steps.length && (
                <div className="w-0.5 h-full bg-primary/20 mt-2" />
              )}
            </div>
            {/* ステップの内容 */}
            <Card className="flex-1 border-border/40">
              <CardHeader className="py-3">
                <CardTitle className="text-lg font-semibold">
                  {step.stepTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="py-3">
                <div className="flex gap-6">
                  {/* 画像部分 */}
                  <div className="w-1/2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          className="cursor-zoom-in w-full"
                          onClick={() => setSelectedImage(step)}
                        >
                          <img
                            src={step.src}
                            alt={step.alt}
                            className="w-full rounded-lg shadow-sm hover:opacity-90 transition-opacity border border-border/40"
                          />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-[90vw]">
                        <div className="flex flex-col items-center">
                          <img
                            src={step.src}
                            alt={step.alt}
                            className="max-h-[80vh] w-auto object-contain rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  {/* 説明文部分 */}
                  <div className="w-1/2 flex items-center">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}