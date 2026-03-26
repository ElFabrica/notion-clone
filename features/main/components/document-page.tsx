"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/features/main/components/toolbar";
import { useQuery } from "convex/react";

interface DocumentPageProps {
  documentId: Id<"documents">;
}
export function DocumentPage({ documentId }: DocumentPageProps) {
  const document = useQuery(api.document.getById, {
    documentId,
  });

  if (document === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pb-40 w-full">
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
}
