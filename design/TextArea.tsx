/* eslint-disable react/display-name */
import If from '@/components/If';
import clsx from 'clsx';
import { forwardRef, TextareaHTMLAttributes } from 'react';

interface iTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  kind?: 'gray' | 'white';
  error?: string;
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, iTextArea>(
  ({ className, kind = 'white', error = '', ...props }, ref) => {
    return (
      <div className="mb-3 ">
        <div
          className={clsx('flex w-full overflow-hidden rounded-lg', {
            'bg-gray': kind === 'gray',
            'border border-black bg-white text-black': kind === 'white',
            'border border-mars-red': error,
          })}
        >
          <textarea
            ref={ref}
            className={clsx(
              'w-full p-3 font-medium placeholder:italic  focus:outline-none',
              {
                'bg-gray placeholder:text-[#333] md:p-5': kind === 'gray',
                ' bg-white placeholder:text-gray': kind === 'white',
              },
              className,
            )}
            {...props}
          />
        </div>
        <If condition={Boolean(error)}>
          <div className="my-3 text-mars-red">{error}</div>
        </If>
      </div>
    );
  },
);

export default TextArea;
