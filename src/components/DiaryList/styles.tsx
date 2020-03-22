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

export const ListContainer = styled.ul``;

export const DiaryItemContainer = styled.li`
  ${({ theme }) => `
    color: ${theme.colors.white};
    padding: 1rem;
    padding-right: 3rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 0.25rem;
    outline: none;

    :last-child {
      margin-bottom: 1rem;
    }

    :hover, :focus {
      background: ${theme.colors.accent.opacity(0.05)};
    }
    
    .diary-name {
      white-space: nowrap;
    }

    .del-btn {
      margin-left: auto;
      position: absolute;
      display: flex;
      right: 1rem;
      cursor: pointer;

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

    .entry-count {
      margin-left: 0.25rem;
      color: ${theme.colors.white.opacity(0.5)};
    }
  `}
`;
