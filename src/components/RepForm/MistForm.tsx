import React from 'react';
import TextInput from '../TextInput';

const MistForm: React.FC = () => {
  return (
    <>
      <TextInput name="rep.mechanism" label="M - Vigastuse mehhanism" />
      <TextInput name="rep.injuries" label="I - Nähtavad/kahtlustatavad vigastused" />
      <h5 className="sub-label">S - Sümptomid</h5>
      <div className="input-row sub-row">
        <TextInput name="rep.signs.a" label="A - Õhuteed" />
        <TextInput name="rep.signs.b" label="B - Hingamine" />
        <TextInput name="rep.signs.c" label="C - Pulss" />
        <TextInput name="rep.signs.d" label="D - Teadvus" />
        <TextInput name="rep.signs.e" label="E - Muu" />
      </div>
      <TextInput name="rep.treatment" label="T - Teostatud ravi" />
    </>
  );
};

export default MistForm;
