import React from "react";
import { Control } from "react-hook-form";
import { z } from "zod";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";

import formSchema from "./TransformationForm";

type CustomFieldProps = {
  // @ts-ignore
  control: Control<z.infer<typeof formSchema>> | undefined;
  render: (props: { field: any }) => React.ReactNode;
  //@ts-ignore
  name: keyof z.infer<typeof formSchema>;
  formLabel?: string;
  className?: string;
};

export const CustomField = ({
  control,
  render,
  name,
  formLabel,
  className,
}: CustomFieldProps) => {
  return (
    <FormField
      //@ts-ignore
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>{render({ field })}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};