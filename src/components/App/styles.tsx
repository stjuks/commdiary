import styled from '@/util/styled';

export const AppContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    overflow: auto;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    color: ${theme.colors.white};

    background: ${theme.colors.primary};

    .placeholder-text {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;
      justify-content: center;

      .description {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 2rem;
      }
    }
  `}
`;
