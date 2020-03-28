import React, { useEffect } from 'react';
import { RepFormContainer } from './styles';
import { RepType } from '@/types';
import reps, { RepStructure, RepSubField } from '@/util/reps';
import { editProperty } from '@/util/helpers';

import TextInput from '../TextInput';
import { useFormikContext } from 'formik';

interface RepFormProps {
  type?: RepType;
}

const buildRepForm = (structure: RepStructure) => {
  const buildSubField = (field: RepSubField, subFieldName: string) => {
    return (
      <React.Fragment key={subFieldName}>
        <h5 className="sub-label">{field.__label}</h5>
        <div className="input-row sub-row">
          {Object.entries(field).map(([key, label]) => {
            if (key !== '__label') {
              return <TextInput name={`rep.${subFieldName}.${key}`} label={label} key={label} />;
            }

            return null;
          })}
        </div>
      </React.Fragment>
    );
  };

  return Object.entries(structure).map(([key, label]) => {
    if (key !== '__type') {
      if (typeof label === 'string') {
        return <TextInput name={`rep.${key}`} label={label} key={label} />;
      }

      return buildSubField(label, key);
    }

    return null;
  });
};

const RepForm: React.FC<RepFormProps> = ({ type }) => {
  return type ? (
    <RepFormContainer>
      <h2 className="rep-title">{type}</h2>
      <div className="rep-form">{buildRepForm(reps[type])}</div>
    </RepFormContainer>
  ) : null;
};

export default RepForm;
