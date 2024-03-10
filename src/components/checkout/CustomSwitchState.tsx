'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Switch } from '@/components/ui/switch';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

const FormSchema = z.object({
  includeNumber: z.boolean().default(false).optional(),
  includeName: z.boolean().default(false).optional(),
});

export default function SwitchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      includeNumber: false,
      includeName: false,
    },
  });

  return (
    <Form {...form}>
      <div className="flex flex-col justify-between max-w-sm w-full gap-5">
        <FormField
          control={form.control}
          name="includeNumber"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between ">
              <FormLabel className="text-base">Numèro</FormLabel>
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
              <FormLabel className="text-base">Nom du joueur</FormLabel>

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
