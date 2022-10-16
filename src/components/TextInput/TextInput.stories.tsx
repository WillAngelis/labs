import { Meta, StoryObj } from '@storybook/react';
import { Envelope, Eye, LockSimple } from 'phosphor-react';
import {
  InputWithIcon,
  TextInputRootProps,
  InputWithoutIcon,
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

export const Senha: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <InputWithIcon.Icon>
        <LockSimple />
      </InputWithIcon.Icon>,
      <InputWithIcon.Input placeholder="Type your password " type="password" />,
      <InputWithIcon.Icon>
        <Eye />
      </InputWithIcon.Icon>,
    ],
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
