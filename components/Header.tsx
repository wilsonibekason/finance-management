import React from "react";
import Navigation from "./navigation";
import HeaderLogo from "./HeaderLogo";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-900 to-blue-400 px-4 py-8 lg:px-14 pb-36">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full flex items-center justify-between mb-14">
            <div className="flex items-center lg:gap-x-16">
              <HeaderLogo />
              <Navigation />
            </div>
            <ClerkLoaded>
              <UserButton afterSwitchSessionUrl="/"></UserButton>
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
