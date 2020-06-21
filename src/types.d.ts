export interface DiaryEntry {
  id: number;
  time: Date;
  from: string;
  to: string;
  content: string;
  rep?: Rep;
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
  | 'RECOVERYREQ'
  | 'SITREP'
  | 'ENGSITREP';

export interface Rep {
  type: RepType;
  [key: string]: string | object;
}
