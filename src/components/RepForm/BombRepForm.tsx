import React from 'react';
import TextInput from '../TextInput';

const BombRepForm: React.FC = () => {
  return (
    <>
      <TextInput name="rep.unit" label="A - Üksus" />
      <TextInput name="rep.spotterPosition" label="B - Vaatleja asukoht" />
      <TextInput name="rep.direction" label="C - Suund ja langemisnurk" />
      <TextInput name="rep.startTime" label="D - Rünnaku alguse aeg" />
      <TextInput name="rep.endTime" label="E - Rünnaku lõpu aeg" />
      <h5 className="sub-label">F - Tulistatud ala</h5>
      <div className="input-row sub-row">
        <TextInput name="rep.area.position" label="1. Asukoht" />
        <TextInput name="rep.area.size" label="2. Ala suurus" />
      </div>
      <TextInput name="rep.arms" label="G - relvade arv ja tüüp" />
      <TextInput name="rep.attackType" label="H - Rünnaku tüüp" />
      <TextInput name="rep.caliber" label="I - Arv, tüüp, kaliiber" />
      <TextInput name="rep.totalTime" label="J - Aeg sähvatusest plahvatuseni" />
      <TextInput name="rep.damages" label="K - Tekitatud kahju" />
      <TextInput name="rep.notes" label="L - Märkused" />
    </>
  );
};

export default BombRepForm;
