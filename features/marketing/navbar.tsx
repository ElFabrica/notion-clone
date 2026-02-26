"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background  dark:bg-[#1f1f1f] flex fixed top-0 items-center w-full p-6 ",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between flex w-full items-center gap-x-2">
        Login
        <ModeToggle />
      </div>
    </div>
  );
}
