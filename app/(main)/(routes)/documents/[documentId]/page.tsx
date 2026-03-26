import { Id } from "@/convex/_generated/dataModel";
import { DocumentPage } from "@/features/main/components/document-page";

interface DocumentPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}
export default async function Page({ params }: DocumentPageProps) {
  const { documentId } = await params;

  return <DocumentPage documentId={documentId} />;
}
