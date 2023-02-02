import clsx from 'clsx';

export default function Button({
  kind = 'primary',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'transparent'
    | 'danger'
    | 'mute';
}) {
  return (
    <button
      className={clsx(
        'rounded-lg p-3 font-medium hover:opacity-90',
        {
          'bg-white text-black': kind === 'default',
          'bg-kuiper-blue text-mute': kind === 'primary',
          'bg-major-orange text-mute': kind === 'secondary',
          'bg-earth-green text-mute': kind === 'success',
          'bg-mars-red text-mute': kind === 'danger',
          'bg-gray text-black': kind === 'mute',
        },
        className,
      )}
      {...props}
    />
  );
}
