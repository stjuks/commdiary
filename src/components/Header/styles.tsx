import styled from '@/util/styled';

export const HeaderContainer = styled.div`
  ${({ theme }) => `
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.white.opacity(0.1)};
    display: flex;
    align-items: center;
    height: 3rem;
    flex-shrink: 0;

    svg {
      stroke-width: 1.5;
    }

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
        height: 3rem;
        width: 3rem;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;

        :before {
          transition: all .2s;
          content: '';
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          position: absolute;
          border-radius: 50%;
          height: 100%;
          width: 100%;
          z-index: -1;
          background: transparent;
        }

        :hover:before,
        :focus:before {
          background: ${theme.colors.accent.opacity(0.1)};
        }
      }

      .export-btn,
      .import-btn {
        svg {
          box-sizing: border-box;
          padding: 0.125rem;
        }
      }

      .info-btn,
      .list-btn {
        font-size: 1.75rem;
      }

      .btn:not(:last-child) {
        margin-right: 1rem;
      }
    }
  `}
`;
