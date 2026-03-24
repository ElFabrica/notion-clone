"use client";

import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "@/features/main/components/navigation";
import { SearchCommand } from "@/components/search-command";

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className={"h-full flex dark:bg-[#1f1f1f] "}>
      <Navigation />
      <SearchCommand />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}
