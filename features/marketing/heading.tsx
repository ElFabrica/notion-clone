"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function Heading() {
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
      <Button>
        Enter Jotion <ArrowRightIcon className="h-2 w-2" />
      </Button>
    </div>
  );
}
