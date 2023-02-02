'use client';

import clsx from 'clsx';
import styled from 'styled-components';

const CardStyled = styled.div`
  box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.12);
`;

export const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
}) => {
  return (
    <CardStyled
      className={clsx(
        'overflow-hidden rounded-xl bg-white p-4 md:p-8',
        className,
      )}
      {...props}
    />
  );
};
