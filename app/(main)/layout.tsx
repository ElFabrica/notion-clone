import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    <div className="w-full flex items-center justify-center">
      <Spinner />
    </div>;
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className={"h-full flex dark:bg-[#1f1f1f] "}>
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}
