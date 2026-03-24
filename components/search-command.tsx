"use client";

import { useEffect, useState } from "react";
import { FileIcon } from "lucide-react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/hooks/use-search";
import { api } from "@/convex/_generated/api";

export function SearchCommand() {
  const { user } = useUser();
  const router = useRouter();
  const documents = useQuery(api.document.gerSearch);
  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.toggle);
  const { isOpen } = useSearch();
  const onClose = useSearch((store) => store.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener("keydown", down);
    return () => {
      document.removeEventListener("keydown", down);
    };
  }, [toggle]);

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`);
    onClose();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder={`Search ${user?.fullName}'s Jotion`} />
      <CommandEmpty>No results found </CommandEmpty>
      <CommandGroup heading="Documents" className="max-h-100 overflow-y-auto">
        {documents?.map((document) => (
          <CommandItem
            key={document._id}
            value={`${document._id}-${document.title}`}
            title={document.title}
            onSelect={() => onSelect(document._id)}
          >
            {document.icon ? (
              <p className="mr-2 text-4.5">{document.icon}</p>
            ) : (
              <FileIcon className="mr-2 size-4" />
            )}
            <span>{document.title}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandDialog>
  );
}
