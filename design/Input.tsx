/* eslint-disable react/display-name */
import If from '@/components/If';
import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  kind?: 'gray' | 'white' | 'transparent';
  prefix?: any;
  suffix?: any;
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, iInput>(
  (
    { kind = 'white', className, prefix, suffix, error = '', ...props },
    ref,
  ) => {
    return (
      <div className="mb-3">
        <div
          className={clsx('flex w-full overflow-hidden rounded-lg', {
            'bg-gray': kind === 'gray',
            'border border-black bg-white': kind === 'white',
            'bg-transparent border border-black': kind === 'transparent',
            'border border-mars-red': error,
          })}
        >
          <If condition={Boolean(prefix)}>
            <div className="flex items-center justify-center">{prefix}</div>
          </If>
          <input
            ref={ref}
            className={clsx(
              'w-full p-2 focus:outline-none',
              {
                'bg-gray font-medium placeholder:italic placeholder:text-[#333] md:p-5':
                  kind === 'gray',
                ' bg-white font-medium placeholder:italic placeholder:text-gray':
                  kind === 'white',
                ' bg-transparent placeholder:text-black':
                  kind === 'transparent',
              },
              className,
            )}
            {...props}
          />
          <If condition={Boolean(suffix)}>
            <div className="flex items-center justify-center">{suffix}</div>
          </If>
        </div>
        <If condition={Boolean(error)}>
          <div className="my-3 text-mars-red">{error}</div>
        </If>
      </div>
    );
  },
);

export default Input;
