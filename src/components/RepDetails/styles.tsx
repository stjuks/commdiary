import styled from '@/util/styled';

export const RepDetailsContainer = styled.div`
  ${({ theme }) => ` 
    color: ${theme.colors.white.opacity(0.9)};
    min-width: 18rem;

    .field,
    .sub-fields,
    .sub-label {
      :not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    .sub-fields {
      margin-left: 0.25rem;
      padding-left: 1rem;
      border-left: 1px solid ${theme.colors.white.opacity(0.1)};
    }

    .sub-label,
    .field-label {
      font-size: 0.875rem;
      color: ${theme.colors.white.opacity(0.5)};
    }

    .field-value {
      font-weight: 700;
    }

    .field-label {
      margin-bottom: 0.5rem;
    }

    [contentEditable=true] {
      position: relative;
      cursor: pointer;

      :hover,
      :focus {
        :before {
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          padding: 0.25rem;
          border-radius: 0.25rem;
          background: ${theme.colors.accent.opacity(0.05)};
          z-index: 0;
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
        }
      }
    }
  `}
`;
