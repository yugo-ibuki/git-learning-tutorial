// client/src/components/GithubAssets.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface AssetItem {
  src: string;
  alt: string;
  description: string;
}

interface GithubAssetsProps {
  title: string;
  assets: AssetItem[];
  columns?: 1 | 2 | 3;
}

export function GithubAssets({
                               title,
                               assets,
                               columns = 2,
                             }: GithubAssetsProps) {
  const [selectedImage, setSelectedImage] = useState<AssetItem | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
          {assets.map((asset, index) => (
            <div key={index} className="border rounded-lg p-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="w-full cursor-zoom-in"
                    onClick={() => setSelectedImage(asset)}
                  >
                    <img
                      src={asset.src}
                      alt={asset.alt}
                      className="w-full rounded-lg shadow-sm hover:opacity-90 transition-opacity"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[90vw]">
                  <div className="flex flex-col items-center">
                    <img
                      src={asset.src}
                      alt={asset.alt}
                      className="max-h-[80vh] w-auto object-contain rounded-lg"
                    />
                    <p className="mt-4 text-sm text-muted-foreground">
                      {asset.description}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              <p className="mt-2 text-sm text-muted-foreground">
                {asset.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}