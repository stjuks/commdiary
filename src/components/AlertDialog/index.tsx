import React, { useContext } from 'react';
import { AlertDialogContainer } from './styles';
import UIStoreContext from '@/stores/UIStore';
import { theme } from '@/util/styled';

interface DialogButton {
  type: 'danger' | 'neutral';
  title: string;
  onClick: () => any;
}

interface AlertDialogProps {
  buttons: DialogButton[];
  title: string;
  description: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ buttons, title, description }) => {
  const uiStore = useContext(UIStoreContext);

  const handleAction = async (button?: DialogButton) => {
    if (button) {
      try {
        await button.onClick();
        uiStore.closeModal();
      } catch (err) {
        throw err;
      }
    } else {
      uiStore.closeModal();
    }
  };

  return (
    <>
      <AlertDialogContainer className="modal-body">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button.title}
              className="btn"
              onClick={() => handleAction(button)}
              style={{ background: theme.colors[button.type] || theme.colors.accent }}
            >
              {button.title}
            </button>
          ))}
          <button className="cancel-btn btn" onClick={() => handleAction()}>
            Tühista
          </button>
        </div>
      </AlertDialogContainer>
    </>
  );
};

export default AlertDialog;
