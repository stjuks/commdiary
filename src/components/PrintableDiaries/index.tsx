import React, { useContext, useState, useEffect } from 'react';
import { PrintableDiariesContainer, DiaryTableContainer } from './styles';
import { Diary, Rep } from '@/types';
import { useParams, useLocation, RouteComponentProps, Link } from 'react-router-dom';
import DiaryStoreContext from '@/stores/DiaryStore';
import { formatDateToDTG } from '@/util/helpers';
import reps from '@/util/reps';
import { FiChevronLeft } from 'react-icons/fi';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PrintableDiaries: React.FC<RouteComponentProps> = ({ location }) => {
  const diaryStore = useContext(DiaryStoreContext);
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const { diaries: diaryIds }: any = location.state;
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
  /* const buildRep = (rep: Rep) => {
    if (rep.type) {
      const repStructure = reps[rep.type];

      return (
        <div className="rep">
          <div className="rep-title">{rep.type}</div>
          {Object.entries(repStructure).map(([key, label]) => {
            if (typeof label === 'string' && key !== '__type') {
              return (
                <div key={key}>
                  <span className="rep-label">{label.split(' ')[0]}</span>
                  <span className="rep-value">{rep[key]}</span>
                </div>
              );
            }

            if (key !== '__type') {
              return Object.entries(label).map(([subKey, subLabel]) =>
                subKey !== '__label' ? (
                  <div key={subKey}>
                    <span className="rep-label sub-label">{subLabel.split(' ')[0]}</span>
                    <span className="rep-value">{rep[key][subKey]}</span>
                  </div>
                ) : (
                  <div className="rep-label" key={subKey}>
                    {subLabel.split(' ')[0]}
                  </div>
                )
              );
            }

            return null;
          })}
        </div>
      );
    }
  };*/
  return (
    <DiaryTableContainer>
      <Link to="/" className="back-link">
        <FiChevronLeft /> Tagasi
      </Link>
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
          <div className="row-wrapper" key={entry.id}>
            <span className="row">
              <span>{index + 1}</span>
              <span>{formatDateToDTG(entry.time)}</span>
              <span>{entry.from || '-'}</span>
              <span>{entry.to || '-'}</span>
              <span>{entry.content || '-'}</span>
            </span>
        {/* buildRep(entry.rep) */}
          </div>
        ))}
      </div>
    </DiaryTableContainer>
  );
};

export default PrintableDiaries;
