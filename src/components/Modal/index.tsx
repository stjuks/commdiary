import React, { useContext } from 'react';
import { ModalStyled } from './styles';
import { observer } from 'mobx-react-lite';
import UIStoreContext from '@/stores/UIStore';

const Modal: React.FC = observer(() => {
  const uiStore = useContext(UIStoreContext);

  const hasModal = uiStore.modals.length > 0;
  const content = hasModal ? uiStore.modals[uiStore.modals.length - 1] : null;

  return (
    <ModalStyled isOpen={hasModal} onRequestClose={uiStore.closeModal}>
      {content}
    </ModalStyled>
  );
});

export default Modal;
