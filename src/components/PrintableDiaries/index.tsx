import React, { useContext, useState, useEffect } from 'react';
import { PrintableDiariesContainer, DiaryTableContainer } from './styles';
import { Diary } from '@/types';
import { useParams, useLocation } from 'react-router-dom';
import DiaryStoreContext from '@/stores/DiaryStore';
import { formatDateToDTG } from '@/util/helpers';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PrintableDiaries: React.FC = () => {
  const diaryStore = useContext(DiaryStoreContext);
  const [diaries, setDiaries] = useState<Diary[]>([]);

  const query = useQuery();

  useEffect(() => {
    const diaryIds = query.getAll('diaryId');
    const foundDiaries = diaryStore.findDiaries(diaryIds);

    setDiaries(foundDiaries);
  }, []);

  useEffect(() => {
    if (diaries.length > 0) {
      window.print();
    }
  }, [diaries]);

  return (
    <PrintableDiariesContainer>
      {diaries.map((diary) => (
        <DiaryTable diary={diary} key={diary.id} />
      ))}
    </PrintableDiariesContainer>
  );
};

interface DiaryTableProps {
  diary: Diary;
}

const DiaryTable: React.FC<DiaryTableProps> = ({ diary }) => {
  return (
    <DiaryTableContainer>
      <h1 className="diary-name">{diary.name}</h1>
      <div className="table-container">
        <span className="row header">
          <span className="heading">#</span>
          <span className="heading">DTG</span>
          <span className="heading">Kellelt</span>
          <span className="heading">Kellele</span>
          <span className="heading">Sisu</span>
        </span>
        {diary.entries.map((entry, index) => (
          <span className="row" key={entry.id}>
            <span>{index + 1}</span>
            <span>{formatDateToDTG(entry.time)}</span>
            <span>{entry.from || '-'}</span>
            <span>{entry.to || '-'}</span>
            <span>{entry.content || '-'}</span>
          </span>
        ))}
      </div>
    </DiaryTableContainer>
  );
};

export default PrintableDiaries;
