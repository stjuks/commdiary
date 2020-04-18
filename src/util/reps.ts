import { RepType } from '@/types';

export interface RepFormField {
  name: string;
  letter: string;
  label: string;
  subFields?: RepFormField[];
}

export interface RepFormStructure {
  type: RepType;
  fields: RepFormField[];
}

export interface RepSubField {
  __label: string;
  [key: string]: string;
}

export interface RepStructure {
  __type: string;
  [key: string]: string | RepSubField;
}

const reps: { [key in RepType]: RepFormStructure } = {
  MIST: {
    type: 'MIST',
    fields: [
      { name: 'mechanism', letter: 'M', label: 'Vigastuse mehhanism' },
      { name: 'injuries', letter: 'I', label: 'Nähtavad/kahtlustatavad vigastused' },
      {
        name: 'signs',
        letter: 'S',
        label: 'Sümptomid',
        subFields: [
          { name: 'airways', letter: 'A', label: 'Õhuteed' },
          { name: 'breathing', letter: 'B', label: 'Hingamine' },
          { name: 'circulation', letter: 'C', label: 'Pulss' },
          { name: 'responsiveness', letter: 'D', label: 'Teadvus' },
          {
            name: 'other',
            letter: 'E',
            label: 'Muu',
          },
        ],
      },
      { name: 'treatment', letter: 'T', label: 'Teostatud ravi' },
    ],
  },
  CONTACTREP: {
    type: 'CONTACTREP',
    fields: [
      { name: 'time', letter: 'A', label: 'Kontakti toimumise aeg' },
      { name: 'enemySize', letter: 'B', label: 'Vastase suurus ja aeg' },
      { name: 'enemyPosition', letter: 'C', label: 'Vastase asukoht' },
      { name: 'other', letter: 'D', label: 'Muu' },
      { name: 'proceedings', letter: 'E', label: 'Edasised tegevused' },
    ],
  },
  AAREP: {
    type: 'AAREP',
    fields: [
      {
        name: 'direction',
        letter: 'A',
        label: 'Õhuründevahendi suund',
        subFields: [
          { name: 'inbound', letter: '1', label: 'Tulekusuund' },
          { name: 'outbound', letter: '2', label: 'Minekusuund' },
        ],
      },
      { name: 'count', letter: 'B', label: 'Õhuründevahendite arv' },
      { name: 'vehicleType', letter: 'C', label: 'Õhuründevahendi tüüp' },
      { name: 'height', letter: 'D', label: 'Õhuründevahendi kõrgus' },
      { name: 'activity', letter: 'E', label: 'Õhuründevahendi tegevus' },
    ],
  },
  BOMBREP: {
    type: 'BOMBREP',
    fields: [
      { name: 'unit', letter: 'A', label: 'Üksus' },
      { name: 'spotterPosition', letter: 'B', label: 'Vaatleja asukoht' },
      { name: 'direction', letter: 'C', label: 'Suund ja langemisnurk' },
      { name: 'startTime', letter: 'D', label: 'Rünnaku alguse aeg' },
      { name: 'endTime', letter: 'E', label: 'Rünnaku lõpu aeg' },
      {
        name: 'area',
        letter: 'F',
        label: 'Tulistatud ala',
        subFields: [
          { name: 'position', letter: '1', label: 'Asukoht' },
          { name: 'size', letter: '2', label: 'Ala suurus' },
        ],
      },
      { name: 'arms', letter: 'G', label: 'Relvade arv ja tüüp' },
      { name: 'attackType', letter: 'H', label: 'Rünnaku tüüp' },
      { name: 'caliber', letter: 'I', label: 'Arv, tüüp, kaliiber' },
      { name: 'totalTime', letter: 'J', label: 'Aeg sähvatusest plahvatuseni' },
      { name: 'damages', letter: 'K', label: 'Tekitatud kahju' },
      { name: 'notes', letter: 'L', label: 'Märkused' },
    ],
  },
  INTREP: {
    type: 'INTREP',
    fields: [
      { name: 'description', letter: 'A', label: 'Tegevuse kirjeldus' },
      { name: 'time', letter: 'B', label: 'Millal?' },
      { name: 'position', letter: 'C', label: 'Kus?' },
      {
        name: 'rating',
        letter: 'D',
        label: 'Hinnang',
        subFields: [
          { name: 'credibility', letter: '1', label: 'Andmete usaldusväärsus' },
          { name: 'conclusion', letter: '2', label: 'Järeldused' },
          { name: 'summary', letter: '3', label: 'Kokkuvõte' },
        ],
      },
    ],
  },
  JAMREP: {
    type: 'JAMREP',
    fields: [
      { name: 'position', letter: 'A', label: 'Segatud raadio asukoht' },
      { name: 'radioType', letter: 'B', label: 'Raadio tüüp ja mark' },
      { name: 'time', letter: 'C', label: 'DTG' },
      { name: 'frequency', letter: 'D', label: 'Raadiosagedus ja võrk' },
      { name: 'characteristics', letter: 'E', label: 'Segamise loomus ja võimsus' },
      { name: 'hiLoFrequencies', letter: 'F', label: 'Kõrgem ja madalam segatud sagedus' },
      { name: 'direction', letter: 'G', label: 'Suund' },
      { name: 'identification', letter: 'H', label: 'Võimalik ID' },
      { name: 'response', letter: 'I', label: 'Rakendatud vastutegevus' },
    ],
  },
  NINELINER: {
    type: 'NINELINER',
    fields: [
      { name: 'location', letter: '1', label: 'Üleandmise paiga asukoht' },
      { name: 'callSign', letter: '2', label: 'Sagedus/kutsung üleandmise asukohas' },
      { name: 'casualtyCount', letter: '3', label: 'Haavatute arv prioriteetide kaupa' },
      { name: 'equipment', letter: '4', label: 'Erivarustus' },
      { name: 'casualtyType', letter: '5', label: 'Haavatute arv tüübi järgi' },
      { name: 'safety', letter: '6', label: 'Üleandmiskoha turvalisus' },
      { name: 'identification', letter: '7', label: 'Üleandmiskoha märkimise viis' },
      { name: 'nationality', letter: '8', label: 'Haavatu rahvus ja seisukord' },
      { name: 'description', letter: '9', label: 'ABK reostus, maandumiskoha kirjeldus' },
    ],
  },
  QUICKSITREP: {
    type: 'QUICKSITREP',
    fields: [
      { name: 'enemy', letter: 'A', label: 'Vastane' },
      { name: 'allies', letter: 'B', label: 'Omad üksused' },
      { name: 'equipment', letter: 'C', label: 'LaTe' },
      { name: 'other', letter: 'D', label: 'Muu' },
    ],
  },
  RECOVERYREQ: {
    type: 'RECOVERYREQ',
    fields: [
      { name: 'unit', letter: 'A', label: 'Üksus' },
      { name: 'when', letter: 'B', label: 'Millal juhtus?' },
      { name: 'what', letter: 'C', label: 'Mis juhtus?' },
      { name: 'support', letter: 'D', label: 'Millist toetust vajatakse?' },
      { name: 'where', letter: 'E', label: 'Kus juhtus?' },
      { name: 'destination', letter: 'F', label: 'Kuhu veetakse?' },
      { name: 'point', letter: 'G', label: 'RV punkt' },
      { name: 'other', letter: 'H', label: 'Lisainfo' },
    ],
  },
  SITREP: {
    type: 'SITREP',
    fields: [
      {
        name: 'situation',
        letter: 'A',
        label: 'Olukord',
        subFields: [
          { name: 'overall', letter: '1', label: 'Üldine olukord' },
          { name: 'enemy', letter: '2', label: 'Vastane' },
          { name: 'allies', letter: '3', label: 'Omad jõud' },
        ],
      },
      { name: 'changes', letter: 'B', label: 'Lahinguolukorra muudatused' },
      {
        name: 'unit',
        letter: 'C',
        label: 'Alluvad üksused/allüksused',
        subFields: [
          { name: 'name', letter: '1', label: 'Nimetus' },
          {
            name: 'positions',
            letter: '2',
            label: 'JuPude praegused ja planeeritavad asukohad',
          },
          { name: 'mainActivity', letter: '3', label: 'Peamine tegevus' },
          { name: 'plannedActivity', letter: '4', label: 'Planeeritav tegevus' },
        ],
      },
      { name: 'notes', letter: 'D', label: 'Lisamärkused' },
    ],
  },
  ENGSITREP: {
    type: 'ENGSITREP',
    fields: [
      {
        name: 'rating',
        letter: 'A',
        label: 'Üksuse/allüksuse lahinguvalmiduse hinnang',
        subFields: [
          { name: 'staff', letter: '1', label: 'Isikukoosseisu valmidus' },
          { name: 'equipment', letter: '2', label: 'Varustuse/tehnika valmidus' },
          {
            name: 'pioneerEquipment',
            letter: '3',
            label: 'Pioneerimaterjalidega komplekteeritus',
          },
        ],
      },
      {
        name: 'location',
        letter: 'B',
        label: 'Üksuse asukoht (JuPu)',
        subFields: [
          { name: 'actualLocation', letter: '1', label: 'Tegelik asukoht' },
          { name: 'plannedLocation', letter: '2', label: 'Planeeritud asukoht' },
          {
            name: 'plannedDueTime',
            letter: '3',
            label: 'Planeeritud ülesande täitmise tähtaeg',
          },
        ],
      },
      { name: 'situation', letter: 'C', label: 'Ülesannete täitmise olukord' },
      { name: 'other', letter: 'E', label: 'Muu' },
    ],
  },
};

export default reps;
