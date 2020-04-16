import styled from '@/util/styled';
import { css } from 'styled-components';

export const buttonStyles = (theme) => `
  background: ${theme.colors.accent};
  border: none;
  color: ${theme.colors.white};
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.2s;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;

  :hover,
  :focus {
    transform: translateY(-5%);
    box-shadow: 2px 2px 1rem ${theme.colors.accent.opacity(0.25)};
    border: 1px solid ${theme.colors.white.opacity(0.15)};
  }
`;

export const ButtonContainer = styled.button`
  ${({ theme }) => buttonStyles(theme)}
`;
