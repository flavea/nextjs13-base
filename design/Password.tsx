/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, useState } from 'react';

import Input from '@/design/Input';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import If from '@/components/If';

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  kind?: 'gray' | 'white';
  prefix?: any;
  suffix?: any;
  error?: string;
  className?: string;
}

const Password = forwardRef<HTMLInputElement, iInput>((props, ref) => {
  const [type, setType] = useState('password');

  return (
    <Input
      type={type}
      ref={ref}
      suffix={
        <button
          onClick={(e) => {
            e.preventDefault();
            setType(type === 'text' ? 'password' : 'text');
          }}
          className="px-5"
          type="button"
        >
          <If condition={type === 'password'}>
            <EyeClosedIcon width={20} height={20} />
          </If>
          <If condition={type === 'text'}>
            <EyeOpenIcon width={20} height={20} />
          </If>
        </button>
      }
      {...props}
    />
  );
});

export default Password;
