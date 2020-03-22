import styled from '@/util/styled';

export const HeaderContainer = styled.div`
  ${({ theme }) => `
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.white.opacity(0.1)};
    display: flex;
    align-items: center;
    height: 3rem;
    flex-shrink: 0;


    h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .sub-title {
      color: ${theme.colors.white.opacity(0.5)};
      margin-bottom: 0.25rem;
      font-size: 0.75rem;
    }

    .action-bar {
      margin-left: auto;
      display: flex;

      .btn {
        display: flex;
        font-size: 2rem;
        cursor: pointer;
      }

      .btn:not(:last-child) {
        margin-right: 1rem;
      }
    }
  `}
`;
