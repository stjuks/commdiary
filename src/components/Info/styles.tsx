import styled from '@/util/styled';

export const InfoContainer = styled.div``;

export const HotkeyItem = styled.div`
  ${({ theme }) => `
    display: flex;
    color: ${theme.colors.white};
    padding: 0.5rem 0;
    align-items: center;

    .keybind-description {
      font-size: 0.875rem;
    }

    .keybind {
      color: ${theme.colors.white.opacity(0.75)};
      font-size: 0.75rem;
      font-weight: 700;
      text-align: right;
      min-width: 10rem;
      margin-left: auto;
    }
  `}
`;
