import styled from '@/util/styled';

export const EntryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 10rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const EntryItemContainer = styled.div`
  ${({ theme }) => `
    position: relative;
    border-radius: 0.5rem;
    padding: 1rem;
    background: ${theme.colors.white.opacity(0.03)};

    :not(:last-child) {
      margin-bottom: 1rem;
    }

    .del-btn {
      position: absolute;
      right: 0.125rem;
      top: -0.5rem;
      background: transparent;
      border: none;
      cursor: pointer;
      color: ${theme.colors.white};
      font-size: 1rem;
      display: none;

      :hover,
      :focus {
        color: ${theme.colors.accent};
      }

      :before {
        position: absolute;
        border-radius: 50%;
        content: '';
        width: 1.75rem;
        height: 1.75rem;
        
        transform: translate(-50%, -50%);
        top: 40%;
        left: 50%;
        background: ${theme.colors.white.opacity(0.1)};
      }
    }

    :hover .del-btn,
    :focus-within .del-btn {
      display: block;
    }

    .row {
      align-items: center;
      display: flex;
    }

    .row-1 {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      color: ${theme.colors.white.opacity(0.5)};
    }

    .row-2 {
      .content {
        flex: 1;
      }

      .rep-name {
        font-size: 0.75rem;
        font-weight: 700;
        cursor: pointer;
        margin-left: 1rem;
        color: ${theme.colors.white.opacity(0.75)};

        :focus,
        :hover {
          text-decoration: underline;
          color: ${theme.colors.accent};
        }
      }
    }

    .recipients {
      display: flex;
      align-items: center;

      svg {
        margin: 0 0.5rem;
      }
    }

    .timestamp {
      margin-left: auto;
    }
  `}
`;
