import React from 'react';
import TextInput from '../TextInput';

const AARepForm: React.FC = () => {
  return (
    <>
      <h5 className="sub-label">A - Õhuründevahendi suund</h5>
      <div className="input-row sub-row">
        <TextInput name="rep.direction.inbound" label="Tulekusuund" />
        <TextInput name="rep.direction.outbound" label="Minekusuund" />
      </div>
      <TextInput name="rep.count" label="B - Õhuründevahendite arv" />
      <TextInput name="rep.vehicleType" label="C - Õhuründevahendi tüüp" />
      <TextInput name="rep.height" label="D - Õhuründevahendi kõrgus" />
      <TextInput name="rep.activity" label="E - Õhuründevahendi tegevus" />
    </>
  );
};

export default AARepForm;
