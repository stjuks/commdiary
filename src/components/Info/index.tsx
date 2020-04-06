import React from 'react';
import { InfoContainer, HotkeyItem } from './styles';

const keybinds = {
  ARROWUP: 'Eelmise sissekande osalejad',
  'SHIFT+ARROWUP': 'Eelmise sissekande osalejad vastupidiselt',
  ARROWDOWN: 'Puhasta vormi väljad',
  'CTRL+SHIFT+C': 'CONTACTREP',
  'CTRL+SHIFT+M': 'MIST',
  'CTRL+SHIFT+J': 'JAMREP',
  'CTRL+SHIFT+S': 'QUICKSITREP',
  'CTRL+SHIFT+I': 'INTREP',
  'CTRL+SHIFT+A': 'AAREP',
  'CTRL+SHIFT+9': 'NINELINER',
  'CTRL+SHIFT+B': 'BOMBREP',
  'CTRL+SHIFT+R': 'RECOVERYREQ'
};

const Info: React.FC = () => {
  return (
    <>
      <h2 className="modal-title">Hotkeyd</h2>
      <InfoContainer className="modal-body">
        {Object.keys(keybinds).map((key) => (
          <HotkeyItem key={key}>
            <div className="keybind-description">{keybinds[key]}</div>
            <div className="keybind">{key}</div>
          </HotkeyItem>
        ))}
      </InfoContainer>
    </>
  );
};

export default Info;
