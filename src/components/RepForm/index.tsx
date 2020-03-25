import React from 'react';
import { RepFormContainer } from './styles';
import { RepType } from '@/types';

import MistForm from './MistForm';
import QuickSitRepForm from './QuickSitRepForm';
import ContactRepForm from './ContactRepForm';
import AARepForm from './AARepForm';
import NineLinerForm from './NineLinerForm';
import BombRepForm from './BombRepForm';
import JamRepForm from './JamRepForm';
import IntRepForm from './IntRepForm';

interface RepFormProps {
  type?: RepType;
}

const forms: { [key in RepType]?: React.ReactElement } = {
  MIST: <MistForm />,
  QUICKSITREP: <QuickSitRepForm />,
  CONTACTREP: <ContactRepForm />,
  AAREP: <AARepForm />,
  NINELINER: <NineLinerForm />,
  BOMBREP: <BombRepForm />,
  JAMREP: <JamRepForm />,
  INTREP: <IntRepForm />
};

const RepForm: React.FC<RepFormProps> = ({ type }) => {
  return type ? (
    <RepFormContainer>
      <h2 className="rep-title">{type}</h2>
      <div className="rep-form">{forms[type]}</div>
    </RepFormContainer>
  ) : null;
};

export default RepForm;
