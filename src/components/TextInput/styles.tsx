import styled from '@/util/styled';

export const TextInputContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;

    .input-field {
      display: flex;
      border-bottom: 1px solid ${theme.colors.white.opacity(0.15)};
      border-radius: 0.5rem 0.5rem 0 0;
      position: relative;

      .indicator {
        width: 1.5rem;
        color: ${theme.colors.white.opacity(0.5)};
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .focus-line {
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 0;
        transition: all .2s;
      }

      input, select {
        height: 19px;
        line-height: 19px;
        box-sizing: content-box;
        padding: 0.5rem 0;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        outline: none;
        min-width: 0;
        background: transparent;
        color: ${theme.colors.white};

        :hover + .focus-line {
          background: ${theme.colors.white.opacity(0.15)};
          width: 100%;
        }

        :focus + .focus-line {
          background: ${theme.colors.accent};
          width: 100%;
        }
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
