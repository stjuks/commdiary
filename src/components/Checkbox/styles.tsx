import styled from '@/util/styled';

export const CheckboxContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    color: ${theme.colors.white};

    .check-box {
      margin-right: 1rem;
      border-radius: 4px;
      height: 1.5rem;
      width: 1.5rem;
      box-shadow: inset 0 0 0.5rem ${theme.colors.black.opacity(0.1)};
      background: ${theme.colors.accent.opacity(0.1)};
      border: 1px solid transparent;
    }

    input[type=checkbox] {
      opacity: 0;
      position: absolute;
      pointer-events: none;

      :checked + .check-box {
        background: ${theme.colors.accent.opacity(0.75)};
      }

      :focus + .check-box,
      :hover + .check-box {
        border: 1px solid ${theme.colors.white.opacity(0.25)};
      }
    }

    label:hover {
      cursor: pointer;
    }

    .label {
      flex: 1;
    }
  `}
`;
