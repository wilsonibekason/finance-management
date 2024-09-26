import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div>
      <Button>Protected Routes</Button>

      <ClerkLoaded>
        <UserButton afterSwitchSessionUrl="/"></UserButton>
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </div>
  );
};

export default Page;
