import { forwardRef, InputHTMLAttributes } from 'react';

import { InputTag } from './Input.styled';

import { InputBox } from '../../InputBox/InputBox';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }: InputProps, ref) => {
    return (
      <InputBox {...{ label, error, name: rest.name }}>
        <InputTag data-testid={`input__${rest.name}`} {...rest} ref={ref} />
      </InputBox>
    );
  },
);
