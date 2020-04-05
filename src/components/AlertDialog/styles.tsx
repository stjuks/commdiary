import styled from '@/util/styled';

export const AlertDialogContainer = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.white};
    max-width: 18rem;
    & > { text-align: center; }

    .title {
      line-height: 2rem;
      font-size: 1.25rem;
      font-weight: 700;
      padding: 1rem;
    }

    .description {
      line-height: 1.75rem;
      padding: 0.5rem 1rem;
      color: ${theme.colors.white.opacity(0.75)};
    }

    .buttons {
      padding: 1rem;
      display: flex;

      flex-direction: column;
    }

    .btn {
      flex: 1;
      cursor: pointer;
      border-radius: 0.5rem;
      font-weight: 700;
      font-size: 0.875rem;
      padding: 0.75rem 1rem;
      transition: all .2s;

      :not(:first-child) {
        margin-top: 0.75rem;
      }

      :hover,
      :focus {
        transform: translateY(-5%);
      }
    }

    .cancel-btn {
      border: 1px solid ${theme.colors.white.opacity(0.5)};
    }
  `}
`;
