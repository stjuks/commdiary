import styled from '@/util/styled';

export const ExportFormContainer = styled.div`
  ${({ theme }) => `
    button {
      width: 100%;
    }

    .checkboxes {
      margin-bottom: 1rem;
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
  `}
`;
