import styled from '@/util/styled';

export const TextInputContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;

    .input-field {
      display: flex;
      border-bottom: 1px solid ${theme.colors.white.opacity(0.15)};
      border-radius: 0.5rem 0.5rem 0 0;

      .indicator {
        width: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      input, select {
        flex: 1;
        padding: 0.5rem 0;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        outline: none;
        min-width: 0;
        background: transparent;
        color: ${theme.colors.white};
      }
    }  
    
    label {
      font-size: 0.875rem;
      color: ${theme.colors.white.opacity(0.75)};
      height: 1.5rem;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    .error-message {
      height: 1.5rem;
      color: ${theme.colors.danger};
      font-size: 0.75rem;
      display: flex;
      align-items: center;
    }
  `}
`;
