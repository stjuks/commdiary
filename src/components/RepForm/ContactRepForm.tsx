import React from 'react';
import TextInput from '../TextInput';

const ContactRepForm: React.FC = () => {
  return (
    <>
      <TextInput name="rep.time" label="A - Kontakti toimumise aeg" />
      <TextInput name="rep.enemySize" label="B - Vastase suurus ja tegevus" />
      <TextInput name="rep.enemyPosition" label="C - Vastase asukoht" />
      <TextInput name="rep.other" label="D - Muu" />
      <TextInput name="rep.proceedings" label="E - Edasised tegevused" />
    </>
  );
};

export default ContactRepForm;
