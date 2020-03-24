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
      padding-right: 3rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      outline: none;

      :hover, :focus {
        background: ${theme.colors.accent.opacity(0.05)};
      }
    }

    :not(:last-child) { margin-bottom: 0.25rem; }

    .diary-name {
      white-space: nowrap;
    }

    .del-btn {
      margin-left: auto;
      position: absolute;
      right: 1rem;
      cursor: pointer;
      display: none;

      :hover:before {
        position: absolute;
        content: '';
        transform: translate(-50%, -50%);
        top: 50%;
        background: ${theme.colors.accent.opacity(0.1)};
        left: 50%;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
    }

    :hover .del-btn {
      display: flex;
    }

    .entry-count {
      margin-left: 0.25rem;
      color: ${theme.colors.white.opacity(0.5)};
    }
  `}
`;
