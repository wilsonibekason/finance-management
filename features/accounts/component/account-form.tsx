import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { insertAccountSchema } from "@/db/schema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = insertAccountSchema.pick({
  name: true,
});

export type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};

const AccountForm = ({
  onDelete,
  onSubmit,
  defaultValues,
  disabled,
  id,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  const handleSubmit = (value: FormValues) => {
    console.log(value);
  };
  const handleDelete = () => {
    onDelete?.();
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={disabled}
                      placeholder="e.g. Cash, Bank, Credit Card"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              </>
            )}
          ></FormField>
          <Button className={"w-full"} disabled={disabled}>
            {id ? "Save Changes" : "Create Account"}{" "}
          </Button>
          <Button
            className={"w-full"}
            disabled={disabled}
            variant={"outline"}
            onClick={handleDelete}
          >
            <Trash className="size-4" />
            <span>Delete Account</span>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AccountForm;
