import React from 'react';
import TextInput from '../TextInput';

const JamRepForm: React.FC = () => {
  return (
    <>
      <TextInput name="rep.position" label="A - Segatud raadio asukoht" />
      <TextInput name="rep.radioType" label="B - Raadio tüüp ja mark" />
      <TextInput name="rep.time" label="C - DTG" />
      <TextInput name="rep.frequency" label="D - Raadiosagedus ja võrk" />
      <TextInput name="rep.characteristics" label="E - Segamise loomus ja võimsus" />
      <TextInput name="rep.hiLoFrequencies" label="F - Kõrgem ja madalam segatud sagedus" />
      <TextInput name="rep.direction" label="G - Suund" />
      <TextInput name="rep.identification" label="H - Võimalik ID" />
      <TextInput name="rep.response" label="I - Rakendatud vastutegevus" />
    </>
  );
};

export default JamRepForm;
