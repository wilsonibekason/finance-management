import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/use-new-accounts";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

const Page = () => {
  const { data = [], isLoading, error } = useGetAccounts();
  const { onOpen } = useNewAccount();
  if (isLoading) return <p>Loading ...</p>;
  return (
    <div>
      <Button onClick={onOpen}>Add an Account</Button>
      {data.length &&
        data?.map((account) => (
          <>
            <div key={account.id}>
              <p>{account.name} </p>
            </div>
          </>
        ))}
    </div>
  );
};

export default Page;
