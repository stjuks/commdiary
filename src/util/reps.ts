import { RepType } from '@/types';

const mistRep = {
  __type: 'MIST',
  mechanism: 'M - vigastuse mehhanism',
  injuries: 'I - Nähtavad/kahtlustatavad vigastused',
  signs: {
    __label: 'S - Sümptomid',
    airways: 'A - Õhuteed',
    breathing: 'B - Hingamine',
    circulation: 'C - Pulss',
    responsiveness: 'D - Teadvus',
    other: 'E - Muu',
  },
  treatment: 'T - Teostatud ravi',
};

const aaRep = {
  __type: 'AAREP',
  direction: {
    __label: 'A - Õhuründevahendi suund',
    inbound: '1. Tulekusuund',
    outbound: '2. Minekusuund',
  },
  count: 'B - Õhuründevahendite arv',
  vehicleType: 'C - Õhuründevahendi tüüp',
  height: 'D - Õhuründevahendi kõrgus',
  activity: 'E - Õhuründevahendi tegevus',
};

const bombRep = {
  __type: 'BOMBREP',
  unit: 'A - Üksus',
  spotterPosition: 'B - Vaatleja asukoht',
  direction: 'C - Suund ja langemisnurk',
  startTime: 'D - Rünnaku alguse aeg',
  endTime: 'E - Rünnaku lõpu aeg',
  area: {
    __label: 'F - Tulistatud ala',
    position: '1. Asukoht',
    size: '2. Ala suurus',
  },
  arms: 'G - Relvade arv ja tüüp',
  attackType: 'H - Rünnaku tüüp',
  caliber: 'I - Arv, tüüp, kaliiber',
  totalTime: 'J - Aeg sähvatusest plahvatuseni',
  damages: 'K - Tekitatud kahju',
  notes: 'L - Märkused',
};

const contactRep = {
  __type: 'CONTACTREP',
  time: 'A - Kontakti toimumise aeg',
  enemySize: 'B - Vastase suurus ja tegevus',
  enemyPosition: 'C - Vastase asukoht',
  other: 'D - Muu',
  proceedings: 'E - Edasised tegevused',
};

const intRep = {
  __type: 'INTREP',
  description: 'A - Tegevuse kirjeldus',
  time: 'B - Millal?',
  position: 'C - Kus?',
  rating: {
    __label: 'D - Hinnang',
    credibility: '1. Andmete usaldusväärsus',
    conclusion: '2. Järeldused',
    summary: '3. Kokkuvõte',
  },
};

const jamRep = {
  __type: 'JAMREP',
  position: 'A - Segatud raadio asukoht',
  radioType: 'B - Raadio tüüp ja mark',
  time: 'C - DTG',
  frequency: 'D - Raadiosagedus ja võrk',
  characteristics: 'E - Segamise loomus ja võimsus',
  hiLoFrequencies: 'F - Kõrgem ja madalam segatud sagedus',
  direction: 'G - Suund',
  identification: 'H - Võimalik ID',
  response: 'I - Rakendatud vastutegevus',
};

const nineLiner = {
  __type: 'NINELINER',
  location: '1. Üleandmise paiga asukoht',
  callSign: '2. Sagedus/kutsung üleandmise kohas',
  casualtyCount: '3. Haavatute arv prioriteetide kaupa',
  equipment: '4. Erivarustus',
  casualtyType: '5. Haavatute arv tüübi järgi',
  safety: '6. Üleandmiskoha turvalisus',
  identification: '7. Üleandmiskoha märkimise viis',
  nationality: '8. Haavatu rahvus ja seisukord',
  description: '9. ABK reostus, maandumiskoha kirjeldus',
};

const quickSitRep = {
  __type: 'QUICKSITREP',
  enemy: 'A - Vastane',
  allies: 'B - Omad üksused',
  equipment: 'C - LaTe',
  other: 'D - Muu',
};

const recoveryRep = {
  __type: 'RECOVERYREQ',
  unit: 'A - Üksus',
  when: 'B - Millal juhtus',
  what: 'C - Mis juhtus',
  support: 'D - Millist toetust vajatakse',
  where: 'E - Kus juhtus',
  destination: 'F - vedu kuhu',
  point: 'G - RV punkt',
  other: 'H - Lisainfo',
};

export interface RepSubField {
  __label: string;
  [key: string]: string;
}

export interface RepStructure {
  __type: string;
  [key: string]: string | RepSubField;
}

const reps: { [key in RepType]: RepStructure } = {
  QUICKSITREP: quickSitRep,
  NINELINER: nineLiner,
  JAMREP: jamRep,
  INTREP: intRep,
  CONTACTREP: contactRep,
  BOMBREP: bombRep,
  AAREP: aaRep,
  MIST: mistRep,
  RECOVERYREQ: recoveryRep
};

export default reps;
