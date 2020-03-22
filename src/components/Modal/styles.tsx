import ReactModal from 'react-modal';
import styled from '@/util/styled';
import { keyframes } from 'styled-components';

ReactModal.setAppElement('#root');

export const ModalStyled = styled(ReactModal)`
  ${({ theme }) => `
    min-width: 18rem;
    outline: none;
    border-radius: 8px;
    background: ${theme.colors.primary};

    .modal-body {
      padding: 1rem;
    }

    .modal-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${theme.colors.white};
      padding: 1rem;
      border-bottom: 1px solid ${theme.colors.white.opacity(0.1)};
    }
  `}
`;
