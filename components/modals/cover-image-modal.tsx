"use client";

import { useCoverImage } from "@/hooks/user-cover-image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { SingleImageDropzone } from "../upload/single-image";
import { UploaderProvider, UploadFn } from "../upload/uploader-provider";

export function CoverImageModal() {
  const params = useParams();
  const { edgestore } = useEdgeStore();
  const coverImage = useCoverImage();
  const update = useMutation(api.document.update);

  const [fise, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  const uploadFn: UploadFn = async ({ file, onProgressChange, signal }) => {
    setIsSubmitting(true);

    const res = await edgestore.publicFiles.upload({
      file,
      signal,
      onProgressChange,
      options: {
        replaceTargetUrl: coverImage.url,
      },
    });

    await update({
      id: params.documentId as Id<"documents">,
      coverImage: res.url,
    });

    setIsSubmitting(false);
    onClose();

    return res;
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            Cover Image
          </DialogTitle>
        </DialogHeader>
        <UploaderProvider uploadFn={uploadFn} autoUpload>
          <SingleImageDropzone
            className="w-full outline-none"
            disabled={isSubmitting}
            height={400}
            width={400}
          />
        </UploaderProvider>
      </DialogContent>
    </Dialog>
  );
}
