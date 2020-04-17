import React from 'react';
import { RepFormContainer } from './styles';
import { RepFormStructure, RepFormField } from '@/util/reps';

import TextInput from '../TextInput';

interface RepFormProps {
  structure?: RepFormStructure;
}

const RepForm: React.FC<RepFormProps> = ({ structure }) => {
  const buildFields = (fields: RepFormField[], subFieldName?: string) => {
    return fields.map((field, i) =>
      field.subFields ? (
        <React.Fragment key={i}>
          <div className="sub-label">{field.letter} - {field.label}</div>
          <div className="sub-fields">
            {buildFields(
              field.subFields,
              subFieldName ? `${subFieldName}.${field.name}` : field.name
            )}
          </div>
        </React.Fragment>
      ) : (
        <TextInput
          key={i}
          name={subFieldName ? `rep.${subFieldName}.${field.name}` : `rep.${field.name}`}
          label={`${field.letter} - ${field.label}`}
        />
      )
    );
  };

  return structure ? (
    <RepFormContainer>
      <h2 className="rep-title">{structure.type}</h2>
      <div className="rep-form">{buildFields(structure.fields)}</div>
    </RepFormContainer>
  ) : null;
};

export default RepForm;
