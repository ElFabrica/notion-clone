"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { Title } from "./title";

interface NavBarProps {
  isCollapsed: boolean;
  onResetWith: () => void;
}

export function NavBar({ isCollapsed, onResetWith }: NavBarProps) {
  const params = useParams();

  const document = useQuery(api.document.getById, {
    documentsId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return <p>Loading...</p>;
  }

  if (document === null) {
    return null;
  }

  return (
    <div className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
      {isCollapsed && (
        <MenuIcon
          role="button"
          onClick={onResetWith}
          className="size-6 text-muted-foreground"
        />
      )}
      <div className="flex items-center justify-between">
        <Title initialData={document} />
      </div>
    </div>
  );
}
