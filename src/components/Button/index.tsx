import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  form?: string;
  type?: 'button' | 'submit' | 'reset';
  title: string;
  onClick?: (event: React.MouseEvent) => any;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...restProps }) => {
  return <ButtonContainer {...restProps}>{title}</ButtonContainer>;
};

export default Button;
