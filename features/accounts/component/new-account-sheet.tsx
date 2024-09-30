import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";

const NewAccountSheet = () => {
  return (
    <>
      <Sheet open>
        <SheetContent className="space-y-4">
          <SheetHeader>New Account</SheetHeader>
          <SheetDescription>
            Creating new account to track your transactions{" "}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NewAccountSheet;
