import React, { useContext, useState, useEffect } from 'react';
import { PrintableDiariesContainer, DiaryTableContainer } from './styles';
import { Diary, Rep } from '@/types';
import { useLocation, RouteComponentProps, Link } from 'react-router-dom';
import DiaryStoreContext from '@/stores/DiaryStore';
import { formatDateToDTG, getObjectProperty } from '@/util/helpers';
import reps, { RepFormField } from '@/util/reps';
import { FiChevronLeft } from 'react-icons/fi';

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
      <Link to="/" className="back-link">
        <FiChevronLeft /> Tagasi
      </Link>
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
  const buildRepFields = (fields: RepFormField[], rep: Rep, subFieldName?: string) => {
    return fields.map((field, i) => {
      const fieldName = subFieldName ? `${subFieldName}.${field.name}` : field.name;

      return field.subFields ? (
        <React.Fragment key={i}>
          <div className="sub-label">{field.letter}</div>
          <div className="sub-fields">{buildRepFields(field.subFields, rep, fieldName)}</div>
        </React.Fragment>
      ) : (
        <div className="field" key={i}>
          <div className="field-label">{field.letter}</div>
          <div className="field-value">{getObjectProperty(rep, fieldName) || '-'}</div>
        </div>
      );
    });
  };

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
          <div className="row-wrapper" key={entry.id}>
            <span className="row">
              <span>{index + 1}</span>
              <span>{formatDateToDTG(entry.time)}</span>
              <span>{entry.from || '-'}</span>
              <span>{entry.to || '-'}</span>
              <span>{entry.content || '-'}</span>
            </span>
            {entry.rep && entry.rep.type && (
              <span className="row">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <div className="rep">
                    <div className="rep-title">{entry.rep.type}</div>
                    {buildRepFields(reps[entry.rep.type].fields, entry.rep)}
                  </div>
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
    </DiaryTableContainer>
  );
};

export default PrintableDiaries;
