import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/features/main/components/toolbar";
import { useQuery } from "convex/react";

interface DocumentPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}
export default async function Page({ params }: DocumentPageProps) {
  const { documentId } = await params;

  const document = useQuery(api.document.getById, {
    documentId,
  });

  if (document === undefined) {
    <div>Loading...</div>;

    if (document === null) {
      return <div>Not found</div>;
    }
  }
  return (
    <div className="pb-40">
      <div className="md:max-w-3xl lg:max-w-4 mx-auto">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
}
