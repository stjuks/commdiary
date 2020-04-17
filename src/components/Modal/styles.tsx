import ReactModal from 'react-modal';
import styled from '@/util/styled';
import { keyframes } from 'styled-components';

ReactModal.setAppElement('#root');

export const ModalStyled = styled(ReactModal)`
  ${({ theme }) => `
    display: flex;
    min-width: 18rem;
    max-height: 90%;
    margin: 1rem;
    outline: none;
    border-radius: 8px;
    flex-direction: column;
    background: ${theme.colors.primary};

    .modal-body {
      overflow: auto;
      padding: 1rem;
      flex: 1;
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
