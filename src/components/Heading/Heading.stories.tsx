import { Heading, HeadingProps } from './Heading';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading default',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: [
        'black',
        'white',
        'green-500',
        'green-300',
        'gray-700',
        'gray-900',
      ],
      control: { type: 'inline-radio' },
    },
    textWeight: {
      options: ['normal', 'bold'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
    color: 'white',
    children: 'Heading small',
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
    color: 'white',
    children: 'Heading large',
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading With H1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
