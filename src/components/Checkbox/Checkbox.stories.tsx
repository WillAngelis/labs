import { Checkbox, CheckboxProps } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-se de mim por 30 dias</Text>
        </div>
      );
    },
  ],
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
