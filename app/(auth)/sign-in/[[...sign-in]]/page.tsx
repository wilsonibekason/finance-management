import { SignedIn, SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
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
                <SignIn path="/sign-in" />
              </ClerkLoaded>
              <ClerkLoading>
                <Loader2 className="animate-spin text-muted-foreground" />
              </ClerkLoading>
            </div>
          </div>
        </div>
        <div className="h-full bg-blue-600 hidden lg:flex justify-center items-center">
          <Image
            src={
              "https://res.cloudinary.com/dpnsseamh/image/upload/v1727358661/logoipsum-327_bdc9ac.svg"
            }
            width={40}
            height={40}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
