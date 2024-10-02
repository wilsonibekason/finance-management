import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { useNewAccount } from "../use-new-accounts";
import AccountForm, { FormValues } from "./account-form";
import { useCreateAccount } from "../api/use-create-account";

const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();
  const mutation = useCreateAccount();
  const onSubmit = (values: FormValues) => {
    console.table(values);
    mutation.mutate(values, {
      onSuccess: () => onClose(),
    });
  };
  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4">
          <SheetHeader>New Account</SheetHeader>
          <SheetDescription>
            Creating new account to track your transactions{" "}
          </SheetDescription>
          {/* FORM */}

          <AccountForm
            onSubmit={onSubmit}
            disabled={mutation.isPending}
            defaultValues={{ name: "" }}
          />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NewAccountSheet;
