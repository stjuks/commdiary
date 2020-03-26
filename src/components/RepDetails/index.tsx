import React from 'react';
import { RepDetailsContainer } from './styles';
import { Rep } from '@/types';
import reps, { RepStructure, RepSubField } from '@/util/reps';

interface RepDetailsProps {
  rep: Rep;
}

const buildRepDetails = (rep: Rep) => {
  const repStructure: RepStructure = reps[rep.type || ''];

  const buildSubDetail = (subField: RepSubField, keyName: string) => {
    return (
      <React.Fragment key={keyName}>
        <h5 className="sub-label">{subField.__label}</h5>
        <div className="detail-row">
          {Object.entries(subField).map(([key, label]) => {
            if (key !== '__label') {
              return (
                <div className="detail-container" key={label}>
                  <div className="detail-label">{label}</div>
                  <div
                    className="detail-value"
                    contentEditable={true}
                    suppressContentEditableWarning
                  >
                    {rep[keyName] ? rep[keyName][key] : '-'}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </React.Fragment>
    );
  };

  if (repStructure) {
    return Object.entries(repStructure).map(([key, label]) => {
      if (key !== '__type') {
        if (typeof label === 'string') {
          return (
            <div className="detail-container" key={label}>
              <div className="detail-label">{label}</div>
              <div className="detail-value" contentEditable={true} suppressContentEditableWarning>
                {rep[key] || '-'}
              </div>
            </div>
          );
        }

        return buildSubDetail(label, key);
      }

      return null;
    });
  }
};

const RepDetails: React.FC<RepDetailsProps> = ({ rep }) => {
  return (
    <>
      <h1 className="modal-title">{rep.type}</h1>
      <RepDetailsContainer className="modal-body">{buildRepDetails(rep)}</RepDetailsContainer>
    </>
  );
};

export default RepDetails;
