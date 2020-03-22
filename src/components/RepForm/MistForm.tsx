import React from 'react';
import TextInput from '../TextInput';

const MistForm: React.FC = () => {
  return (
    <>
      <TextInput name="rep.mechanism" label="M - Mechanism" />
      <TextInput name="rep.injuries" label="I - Injuries" />
      <h5 className="sub-label">S - Signs</h5>
      <div className="input-row sub-row">
        <TextInput name="rep.signs.a" label="A - Airways" />
        <TextInput name="rep.signs.b" label="B - Breathing" />
        <TextInput name="rep.signs.c" label="C - Pulse" />
        <TextInput name="rep.signs.d" label="D - Responsiveness" />
        <TextInput name="rep.signs.e" label="E - Other" />
      </div>
      <TextInput name="rep.treatment" label="T - Treatment" />
    </>
  );
};

export default MistForm;
