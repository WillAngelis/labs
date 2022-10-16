import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?:
    | 'black'
    | 'white'
    | 'green-500'
    | 'green-300'
    | 'gray-700'
    | 'gray-900';
  textWeight?: 'normal' | 'bold';
  asChild?: boolean;
}

export const Text = ({
  size = 'md',
  children,
  color = 'white',
  textWeight = 'normal',
  asChild,
}: TextProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx('font-sans', {
        // Text Sizes
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
        // Text Font Weight
        'font-normal': textWeight === 'normal',
        'font-bold': textWeight === 'bold',
        // Text Font Colors
        'text-white': color === 'white',
        'text-black': color === 'black',
        'text-gray-700': color === 'gray-700',
        'text-gray-900': color === 'gray-900',
        'text-green-500': color === 'green-500',
        'text-green-300': color === 'green-300',
      })}
    >
      {children}
    </Comp>
  );
};
