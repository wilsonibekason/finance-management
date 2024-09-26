import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full items-center px-4 justify-center lg:flex flex-col">
          <div className="text-center space-y-4 pt-16">
            <h1 className="font-bold text-2xl text-[#2E2A47] uppercase">
              Welcome Back
            </h1>
            <p className="text-[#7E8CE0]">Log In to Continue</p>
            <div className="flex items-center justify-center mt-8">
              <ClerkLoaded>
                <SignUp path="/sign-up" />
              </ClerkLoaded>
              <ClerkLoading>
                <Loader2 className="animate-spin text-muted-foreground" />
              </ClerkLoading>
            </div>
          </div>
        </div>
        <div className="h-full bg-blue-600 hidden lg:flex justify-center items-center">
          <Image src={"./logo.svg"} width={100} height={100} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Page;
