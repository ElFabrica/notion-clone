"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className=" max-w-3xl space-y-4">
      <h1 className="text--3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspacec where <br />
        Better, faster work happens
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Enter Jotion <ArrowRightIcon className="h-2 w-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Enter Jotion <ArrowRightIcon className="h-2 w-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
