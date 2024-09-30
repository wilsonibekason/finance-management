import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

const Page = () => {
  const { data, isLoading, error } = useGetAccounts();
  if (isLoading) return <p>Loading ...</p>;
  return (
    <div>
      <Button>Protected Routes</Button>
      {data?.map((account) => (
        <>
          <div key={account.id}>
            <p>{account.name} </p>
          </div>
        </>
      ))}

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
