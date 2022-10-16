import { Button, ButtonProps } from './Button';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Login',
  },
  argTypes: {
    fontSize: {
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
    bgColor: {
      options: [
        'black',
        'green-500',
        'green-300',
        'green-200',
        'gray-700',
        'gray-900',
      ],
      control: { type: 'inline-radio' },
    },
    textWeight: {
      options: ['normal', 'semibold', 'bold'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Green500: StoryObj<ButtonProps> = {
  args: {
    color: 'gray-700',
    bgColor: 'green-500',
    children: 'Login',
  },
};

export const Green300: StoryObj<ButtonProps> = {
  args: {
    color: 'gray-700',
    bgColor: 'green-300',
    children: 'Login',
  },
};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <a>Login with A tag</a>,
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
