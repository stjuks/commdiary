export interface DiaryEntry {
  id: number;
  time: Date;
  from: string;
  to: string;
  content: string;
  rep: Rep;
}

export interface Diary {
  id: number;
  name: string;
  createdAt: Date;
  entries: DiaryEntry[];
}

type RepType =
  | 'MIST'
  | 'CONTACTREP'
  | 'JAMREP'
  | 'QUICKSITREP'
  | 'INTREP'
  | 'AAREP'
  | 'NINELINER'
  | 'BOMBREP'
  | 'RECOVERYREQ';

export interface Rep {
  type: RepType | undefined;
  [key: string]: string | object;
}

export interface MISTRep extends Rep {
  type: 'MIST';
  mechanism: string;
  injuries: string;
  signs: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
  };
  treatment: string;
}
