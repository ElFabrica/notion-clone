"use client";

import { useCoverImage } from "@/hooks/user-cover-image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

export function CoverImageModal() {
  const coverImave = useCoverImage();

  return (
    <Dialog open={coverImave.isOpen} onOpenChange={coverImave.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <div>Todo: Update image</div>
      </DialogContent>
    </Dialog>
  );
}
