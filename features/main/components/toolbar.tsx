"use client";

import { IconPicker } from "@/components/icon-picker";
import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";
import { SmileIcon, XIcon } from "lucide-react";

interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

export function Toolbar({ initialData, preview }: ToolbarProps) {
  return (
    <div className="pl-13.5 group relative">
      {!!initialData.icon && !preview && (
        <div className="flex items-center gap-x-2 group/icon pt-6">
          <IconPicker onChange={() => {}}>
            <p className="text-6xl hover:opacity-75 transition">
              {initialData.icon}
            </p>
          </IconPicker>
          <Button
            onClick={() => {}}
            className="rounded-full opacity-0 group-hover:opacity-100 transition text-muted-foreground text-xl"
            variant={"outline"}
            size={"icon"}
          >
            <XIcon />
          </Button>
        </div>
      )}
      {!!initialData.icon && preview && (
        <p className="text-6xl pt-6">{initialData.icon}</p>
      )}
      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 py-4 ">
        {!initialData.icon && !preview && (
          <IconPicker asChild onChange={() => {}}>
            <Button
              className="text-muted-foreground text-xs "
              variant={"outline"}
              size={"sm"}
            >
              <SmileIcon className="size-4 mr-2" />
              Add icon
            </Button>
          </IconPicker>
        )}
      </div>
    </div>
  );
}
