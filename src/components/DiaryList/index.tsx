import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import DiaryStoreContext from '@/stores/DiaryStore';
import UIStoreContext from '@/stores/UIStore';
import { Diary } from '@/types';
import { DiaryListContainer, ListContainer, DiaryItemContainer } from './styles';
import Button from '../Button';
import DiaryForm from '../DiaryForm';
import { FiTrash2 } from 'react-icons/fi';
import AlertDialog from '../AlertDialog';

const DiaryList: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);
  const uiStore = useContext(UIStoreContext);

  return (
    <>
      <h1 className="modal-title">Päevikud</h1>
      <DiaryListContainer className="modal-body">
        <ListContainer>
          {diaryStore.diaries.map((diary) => (
            <DiaryItem
              diary={diary}
              setActive={diaryStore.setActiveDiary}
              onDelete={() =>
                uiStore.openModal(
                  <AlertDialog
                    title={`Kas oled kindel, et soovid päeviku kustutada?`}
                    description="
                      Päevik kustutatakse jäädavalt. 
                      Kui soovid päeviku säilitada, aga nimekirjast kustutada, siis kasuta eksportimise funktsiooni.
                    "
                    buttons={[
                      {
                        type: 'danger',
                        title: 'Kustuta',
                        onClick: () => diaryStore.deleteDiary(diary.id),
                      },
                    ]}
                  />
                )
              }
              key={diary.id}
            />
          ))}
        </ListContainer>
        <Button
          className="add-diary-btn"
          title="+ Lisa päevik"
          onClick={() => uiStore.openModal(<DiaryForm />)}
        />
      </DiaryListContainer>
    </>
  );
});

interface DiaryItemProps {
  diary: Diary;
  setActive: (diaryId: number) => any;
  onDelete: (diaryId: number) => any;
}

const DiaryItem: React.FC<DiaryItemProps> = ({ diary, setActive, onDelete }) => {
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    onDelete(diary.id);
  };

  return (
    <DiaryItemContainer>
      <button className="diary-item" onClick={() => setActive(diary.id)}>
        <div className="diary-name">{diary.name}</div>
        <div className="entry-count">({diary.entries.length})</div>
      </button>
      <button className="btn del-btn" onClick={handleDelete}>
        <FiTrash2 />
      </button>
    </DiaryItemContainer>
  );
};

export default DiaryList;
