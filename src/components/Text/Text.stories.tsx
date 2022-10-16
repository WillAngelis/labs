import { Text, TextProps } from './Text';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text default',
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
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
    color: 'white',
    children: 'Text small',
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    color: 'white',
    children: 'Text large',
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P tag</p>,
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
