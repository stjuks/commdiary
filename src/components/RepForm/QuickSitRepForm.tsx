import React from 'react';
import TextInput from '../TextInput';

const QuickSitRepForm: React.FC = () => {
  return (
    <>
      <TextInput name="rep.enemy" label="A - Vastane" />
      <TextInput name="rep.allies" label="B - Omad üksused" />
      <TextInput name="rep.equipment" label="C - LaTe" />
      <TextInput name="rep.other" label="D - Muu" />
    </>
  );
};

export default QuickSitRepForm;
