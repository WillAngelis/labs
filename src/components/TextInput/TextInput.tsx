import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Eye, LockSimple } from 'phosphor-react';

export interface TextInputRootProps {
  children?: ReactNode;
}
const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="flex items-center gap-3 py-3 px-4 h-12 w-96 rounded outline-none bg-gray-900 focus-within:ring-2 ring-green-300 ">
      {children}
    </div>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children?: ReactNode;
  onClick?: () => void;
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-500">{children}</Slot>;
};

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = (props: TextInputProps) => {
  return (
    <input
      className="bg-transparent flex-1  text-white outline-none text-xxs font-light placeholder:text-gray-500 "
      {...props}
    />
  );
};

export const TextInputPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <TextInputIcon>
        <LockSimple />
      </TextInputIcon>
      <TextInput type={showPassword ? 'text' : 'password'} />
      <TextInputIcon>
        <Eye onClick={() => setShowPassword(!showPassword)} />
      </TextInputIcon>
    </>
  );
};

export const InputWithIcon = {
  Root: TextInputRoot,
  Input: TextInput,
  Icon: TextInputIcon,
};

export const InputWithoutIcon = {
  Root: TextInputRoot,
  Input: TextInput,
};
