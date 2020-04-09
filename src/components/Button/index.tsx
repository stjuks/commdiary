import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  form?: string;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  title: string;
  onClick?: (event: React.MouseEvent) => any;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ title, ...restProps }) => {
  return <ButtonContainer {...restProps}>{title}</ButtonContainer>;
};

export default Button;
