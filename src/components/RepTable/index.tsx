import React from 'react';

import { RepTableContainer } from './styles';
import { Rep } from '@/types';
import reps from '@/util/reps';

interface RepTableProps {
  rep: Rep;
}

const RepTable: React.FC<RepTableProps> = ({ rep }) => {
  const repStructure = reps[rep.type];

  return <RepTableContainer></RepTableContainer>;
};

export default RepTable;
