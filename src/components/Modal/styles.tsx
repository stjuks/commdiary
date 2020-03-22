import ReactModal from 'react-modal';
import styled from '@/util/styled';
import { keyframes } from 'styled-components';

ReactModal.setAppElement('#root');

export const ModalStyled = styled(ReactModal)`
  ${({ theme }) => `
    min-width: 15rem;
    outline: none;
    border-radius: 8px;
    padding: 1rem;
    background: ${theme.colors.primary};
  `}
`;
