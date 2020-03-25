import React from 'react';
import TextInput from '../TextInput';

const IntRepForm: React.FC = () => {
  return (
    <>
      <TextInput name="rep.position" label="A - Tegevuse kirjeldus" />
      <TextInput name="rep.time" label="B - Millal?" />
      <TextInput name="rep.position" label="C - Kus?" />
      <h5 className="sub-label">D - Hinnang</h5>
      <div className="input-row sub-row">
        <TextInput name="rep.credibility" label="1. Andmete usaldusväärsus" />
        <TextInput name="rep.conclusion" label="2. Järeldused" />
        <TextInput name="rep.summary" label="3. Kokkuvõte" />
      </div>
    </>
  );
};

export default IntRepForm;
