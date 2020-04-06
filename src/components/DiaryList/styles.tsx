import styled from '@/util/styled';

export const DiaryListContainer = styled.div`
  ${({ theme }) => `
    .add-diary-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      background: transparent;
      color: ${theme.colors.accent};
      border: 1px dashed ${theme.colors.accent};
    }
  `}
`;

export const ListContainer = styled.div`
  max-height: 20rem;
  overflow: auto;
  margin-bottom: 1rem;
`;

export const DiaryItemContainer = styled.div`
  ${({ theme }) => `
    position: relative;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};

    .diary-item {
      width: 100%;
      display: flex;
      padding: 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      outline: none;
      padding-right: 6.5rem;

      :hover, :focus {
        background: ${theme.colors.accent.opacity(0.05)};
      }
    }

    :not(:last-child) { margin-bottom: 0.25rem; }

    .diary-name {
      white-space: nowrap;
    }

    .action-buttons {
      visibility: hidden;
      position: absolute;
      right: 1.5rem;
      display: flex;
      align-items: center;
      margin-left: auto;

      .btn {
        :not(:last-child) {
          margin-right: 1.5rem;
        }

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;

        :hover:before,
        :focus:before {
          border-radius: 50%;
          content: '';
          height: 2.25rem;
          width: 2.25rem;
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          background: ${theme.colors.accent.opacity(0.1)};
        }
      }
    }

    :hover, :focus-within {
      .action-buttons {
        visibility: visible;
      }
    } 

    .entry-count {
      margin-left: 0.25rem;
      color: ${theme.colors.white.opacity(0.5)};
    }
  `}
`;
