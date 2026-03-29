"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/user-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { ImageIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

interface coverImageProps {
  url?: string;
  preview?: boolean;
}

export function Cover({ preview, url }: coverImageProps) {
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const removeCoverImage = useMutation(api.document.removeCoverImage);
  const params = useParams();

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url,
      });
      removeCoverImage({
        id: params.documentId as Id<"documents">,
      });
    }
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted",
      )}
    >
      {url && <Image src={url} alt="Cover" className="object-cover" fill />}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            onClick={() => coverImage.onReplace(url)}
            className="text-muted-foreground text-xs"
            variant={"outline"}
            size={"sm"}
          >
            <ImageIcon className="size-4 mr-2" />
            Change over
          </Button>
          <Button
            onClick={onRemove}
            className="text-muted-foreground text-xs"
            variant={"outline"}
            size={"sm"}
          >
            <XIcon className="size-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
}

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="w-full  h-[12vh]" />;
};
