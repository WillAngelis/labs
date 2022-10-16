import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {}

export const Checkbox = ({}: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-700 rounded">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-green-500"></Check>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
