import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { ButtonTag } from './Button.styled';

import { Loader } from '../Loader/Loader';

interface GlobalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  isError?: boolean;
  isLoading?: boolean;
  testId?: string;
}

export const Button = forwardRef<HTMLButtonElement, GlobalButtonProps>(
  (
    {
      children,
      disabled,
      isError,
      isLoading,
      testId,
      ...rest
    }: GlobalButtonProps,
    ref,
  ) => {
    return (
      <ButtonTag
        {...rest}
        data-testid={testId}
        disabled={disabled || isLoading || isError}
        ref={ref}
      >
        {isLoading ? <Loader /> : children}
      </ButtonTag>
    );
  },
);
