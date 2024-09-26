import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  href: string;
  label: string;
  isActive: boolean;
}
const NavButton: React.FC<NavButtonProps> = ({ href, isActive, label }) => {
  return (
    <>
      <Button
        asChild
        size="sm"
        variant="outline"
        className={cn(
          "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none text-white transition-all",
          isActive ? "bg-white/10 text-white" : "bg-transparent"
        )}
      >
        <Link href={href}>{label}</Link>
      </Button>
    </>
  );
};

export default NavButton;
