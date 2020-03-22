import React from 'react';
import { RepFormContainer } from './styles';
import { RepType } from '@/types';
import MistForm from './MistForm';

interface RepFormProps {
  type?: RepType;
}

const forms: { [key in RepType]?: React.ReactElement } = {
  MIST: <MistForm />
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
