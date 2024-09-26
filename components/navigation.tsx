"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import NavButton from "./NavButton";
import { useMedia } from "react-use";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: " /categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);
  const onClick = (href: string) => {
    router.push(href);
    setOpen(true);
  };

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button
            variant={"outline"}
            size={"sm"}
            className="fomt-normal bg-white/20 hover:bg-white/30 "
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                onClick={() => onClick(route.href)}
                key={route.href}
                variant={route.href === pathName ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <>
      <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {routes.map((route) => {
          const { href, label } = route;
          return (
            <>
              <NavButton
                key={`${label} + 1`}
                href={href}
                label={label}
                isActive={pathName === route.href}
              />
            </>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
