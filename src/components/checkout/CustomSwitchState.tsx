'use client';

import { Switch } from '@/components/ui/switch';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';

type SwitchFormProps = {
  form: UseFormReturn<
    {
      includeNumber?: boolean | undefined;
      includeName?: boolean | undefined;
    },
    any,
    undefined
  >;
};

export default function SwitchForm({ form }: SwitchFormProps) {
  return (
    <Form {...form}>
      <div className="flex w-full max-w-sm flex-col justify-between gap-5">
        <FormField
          control={form.control}
          name="includeNumber"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between ">
              <FormLabel className="text-base">Avec numèro</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="includeName"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between">
              <FormLabel className="text-base">Avec nom du joueur</FormLabel>

              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </Form>
  );
}
