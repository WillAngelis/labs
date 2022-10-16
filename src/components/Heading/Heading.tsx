import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
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

export const Heading = ({
  size = 'md',
  children,
  color = 'white',
  textWeight = 'bold',
  asChild,
}: HeadingProps) => {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={clsx('font-sans font-bold', {
        // Heading Sizes
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
        // Heading Font Weight
        'font-normal': textWeight === 'normal',
        'font-bold': textWeight === 'bold',
        // Heading Font Colors
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
