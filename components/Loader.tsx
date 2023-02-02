import If from '@/components/If';
import LoadingSpinner from '@/design/LoadingSpinner';
import clsx from 'clsx';

export default function Loader({
  visible,
  text,
  showText = true,
  className,
  style,
  ...props
}: {
  visible: boolean;
  text?: string;
  showText?: boolean;
  style?: any;
  className?: string;
}) {
  return (
    <If condition={visible}>
      <div
        className={clsx(
          'absolute top-0 left-0 z-[999] flex h-full w-full flex-col items-center justify-center bg-mute bg-opacity-90',
          className,
        )}
        {...props}
      >
        <div>
          <LoadingSpinner />
          <If condition={showText}>
            <div className="text-xl font-bold">{text || 'Logging in...'}</div>
          </If>
        </div>
      </div>
    </If>
  );
}
