import styled from '@/util/styled';
import { buttonStyles } from '../Button/styles';

export const ExportFormContainer = styled.div`
  ${({ theme }) => `
    button, a {
      width: 100%;
      margin-top: 0.5rem;
    }

    .checkboxes {
      margin-bottom: 0.5rem;
    }

    .checkbox-container:not(:last-child) {
      margin-bottom: 1rem;
    }

    .select-all {
      border-bottom: 1px solid ${theme.colors.white.opacity(0.1)};
      padding-bottom: 1rem;

      .label {
        color: ${theme.colors.white};
      }
    }

    .print-btn {
      width: 100%;
      ${buttonStyles(theme)}
    }

    .error-message {
      color: ${theme.colors.danger};
      height: 1rem;
      display: flex;
      align-items: center;
      font-size: 0.75rem;
    }
  `}
`;
