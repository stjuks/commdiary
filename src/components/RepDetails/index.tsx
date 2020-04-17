import React from 'react';
import { RepDetailsContainer } from './styles';
import { Rep } from '@/types';
import reps, { RepStructure, RepSubField, RepFormStructure, RepFormField } from '@/util/reps';
import { editProperty, getObjectProperty } from '@/util/helpers';

interface RepDetailsProps {
  rep: Rep;
  onEdit: (rep: Rep) => any;
}

const RepDetails: React.FC<RepDetailsProps> = ({ rep, onEdit }) => {
  const repStructure = reps[rep.type];

  const handleEdit = (event: React.FocusEvent<HTMLDivElement>) => {
    const { textContent, id } = event.currentTarget;
    let newRep = Object.assign({}, rep);

    newRep = editProperty(newRep, id, textContent);
    onEdit(newRep);
  };

  const buildFields = (fields: RepFormField[], subFieldName?: string) => {
    return fields.map((field, i) => {
      const fieldName = subFieldName ? `${subFieldName}.${field.name}` : field.name;

      return field.subFields ? (
        <React.Fragment key={i}>
          <div className="sub-label">
            {field.letter} - {field.label}
          </div>
          <div className="sub-fields">{buildFields(field.subFields, fieldName)}</div>
        </React.Fragment>
      ) : (
        <div className="field" key={i}>
          <div className="field-label">
            {field.letter} - {field.label}
          </div>
          <div
            className="field-value"
            tabIndex={0}
            contentEditable={true}
            id={fieldName}
            onBlur={handleEdit}
            suppressContentEditableWarning
          >
            {getObjectProperty(rep, fieldName) || '-'}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <h1 className="modal-title">{rep.type}</h1>
      <RepDetailsContainer className="modal-body">
        {repStructure && buildFields(repStructure.fields)}
      </RepDetailsContainer>
    </>
  );
};

export default RepDetails;
