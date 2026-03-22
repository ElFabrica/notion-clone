"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function Page() {
  const { user } = useUser();
  const create = useMutation(api.document.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a note...",
      success: "New note created",
      error: "Failed to create a new note",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/empty.webp"}
        height={"300"}
        width={"300"}
        alt={"Empty"}
        className="dark:hidden"
      />
      <Image
        src={"/empty-dark.webp"}
        height={"300"}
        width={"300"}
        alt={"Empty"}
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircleIcon className="size-4" />
        Create a note
      </Button>
    </div>
  );
}
