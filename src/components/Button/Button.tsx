import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  color?:
    | 'black'
    | 'white'
    | 'green-500'
    | 'green-300'
    | 'gray-700'
    | 'gray-900';
  textWeight?: 'normal' | 'semibold' | 'bold';
  asChild?: boolean;
  fontSize?: 'sm' | 'md' | 'lg';
  bgColor?:
    | 'black'
    | 'green-500'
    | 'green-300'
    | 'green-200'
    | 'gray-700'
    | 'gray-900';
}
export const ButtonIcon = {};
export const Button = ({
  children,
  color = 'gray-700',
  textWeight = 'semibold',
  asChild,
  bgColor = 'green-300',
  fontSize = 'md',
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'font-sans py-3 px-3 rounded w-80 transition-colors hover:bg-green-200 focus:ring-2 ring-white',
        {
          // Button Font Weight
          'font-normal': textWeight === 'normal',
          'font-semibold': textWeight === 'semibold',
          'font-bold': textWeight === 'bold',
          // Button Font Size
          'text-xs': fontSize === 'sm',
          'text-sm': fontSize === 'md',
          'text-md': fontSize === 'lg',
          // Button Text Colors
          'text-black': color === 'black',
          'text-white': color === 'white',
          'text-gray-700': color === 'gray-700',
          'text-gray-900': color === 'gray-900',
          'text-green-500': color === 'green-500',
          'text-green-300': color === 'green-300',
          // Button Background Colors
          'bg-black': bgColor === 'black',
          'bg-gray-700': bgColor === 'gray-700',
          'bg-gray-900': bgColor === 'gray-900',
          'bg-green-500': bgColor === 'green-500',
          'bg-green-300': bgColor === 'green-300',
          'bg-green-200': bgColor === 'green-200',
        }
      )}
    >
      {children}
    </Comp>
  );
};
