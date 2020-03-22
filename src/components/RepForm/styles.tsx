import styled from '@/util/styled';
import { keyframes } from 'styled-components';

export const RepFormContainer = styled.div`
  ${({ theme }) => `
    padding: 0.5rem;
    transform-origin: top;

    .rep-title {
      padding: 0 0.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .rep-form {
      .input-container {
        padding: 0.5rem;
        flex: 1;
      }

      .input-row {
        flex-wrap: wrap;
        display: flex;
      }

      .sub-row {
        border-left: 1px solid ${theme.colors.white.opacity(0.1)};
        padding-left: 1rem;
        margin-left: 0.75rem;
      }

      .sub-label {
        padding: 0.5rem;
        font-size: 0.875rem;
        color: ${theme.colors.white.opacity(0.75)};
      }
    }
  `}
`;
