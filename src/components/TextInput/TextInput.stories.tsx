import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import {
  InputWithIcon,
  TextInputRootProps,
  InputWithoutIcon,
  TextInputPassword,
} from './TextInput';

export default {
  title: 'Components/TextInput',
  component: InputWithIcon.Root,
  args: {
    children: [
      <InputWithIcon.Icon>
        <Envelope />
      </InputWithIcon.Icon>,
      <InputWithIcon.Input placeholder="Type your email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Email: StoryObj<TextInputRootProps> = {
  args: {},
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Password: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInputPassword />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Input: StoryObj<TextInputRootProps> = {
  args: {
    children: <InputWithoutIcon.Input placeholder="Type your name" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
