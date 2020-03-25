import React from 'react';
import TextInput from '../TextInput';

const NineLinerForm: React.FC = () => {
  return (
    <>
      <TextInput name="rep.location" label="1. Üleandmise paiga asukoht" />
      <TextInput name="rep.callSign" label="2. Sagedus/kutsung üleandmise kohas" />
      <TextInput name="rep.casualtyCount" label="3. Haavatute arv prioriteetide kaupa" />
      <TextInput name="rep.equipment" label="4. Erivarustus" />
      <TextInput name="rep.casualtyType" label="5. Haavatute arv tüübi järgi" />
      <TextInput name="rep.safety" label="6. Üleandmiskoha turvalisus" />
      <TextInput name="rep.identification" label="7. Üleandmiskoha märkimise viis" />
      <TextInput name="rep.nationality" label="8. Haavatu rahvus ja seisukord" />
      <TextInput name="rep.description" label="9. ABK reostus, maandumiskoha kirjeldus" />
    </>
  );
};

export default NineLinerForm;
